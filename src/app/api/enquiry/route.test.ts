import { describe, expect, it, vi, beforeEach } from "vitest";

// Stub Resend so tests never hit the real API, cost real send quota, or
// require a real RESEND_API_KEY. Each test still exercises the route's
// own logic (origin check, rate limit, validation, honeypot) for real.
const send = vi.fn().mockResolvedValue({ data: { id: "test-id" }, error: null });
vi.mock("resend", () => ({
  Resend: class {
    emails = { send };
  },
}));

process.env.RESEND_API_KEY = "test-key";

const { POST } = await import("./route");

function makeRequest(body: unknown, headers: Record<string, string> = {}) {
  return new Request("http://localhost:3000/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

const validBody = { name: "Test User", email: "test@example.com", mobile: "9876543210" };
const sameOrigin = { Origin: "http://localhost:3000", Host: "localhost:3000" };

// Every test gets its own IP so the shared in-memory rate limiter (module
// state, persists across tests in this file) can't leak between cases.
let ipCounter = 0;
function freshIp() {
  ipCounter += 1;
  return { "x-forwarded-for": `10.0.0.${ipCounter}` };
}

beforeEach(() => {
  send.mockClear();
});

describe("POST /api/enquiry", () => {
  it("rejects requests with no Origin header", async () => {
    const res = await POST(makeRequest(validBody, { Host: "localhost:3000", ...freshIp() }));
    expect(res.status).toBe(403);
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects requests whose Origin doesn't match Host", async () => {
    const res = await POST(
      makeRequest(validBody, { Origin: "http://evil.example.com", Host: "localhost:3000", ...freshIp() })
    );
    expect(res.status).toBe(403);
    expect(send).not.toHaveBeenCalled();
  });

  it("rejects invalid field values with 422 and per-field errors", async () => {
    const res = await POST(
      makeRequest({ name: "A", email: "not-an-email", mobile: "123" }, { ...sameOrigin, ...freshIp() })
    );
    expect(res.status).toBe(422);
    const data = await res.json();
    expect(data.errors).toEqual(
      expect.objectContaining({ name: expect.any(String), email: expect.any(String), mobile: expect.any(String) })
    );
    expect(send).not.toHaveBeenCalled();
  });

  it("silently no-ops when the honeypot field is filled, without sending mail", async () => {
    const res = await POST(
      makeRequest({ ...validBody, company: "I am a bot" }, { ...sameOrigin, ...freshIp() })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
    expect(send).not.toHaveBeenCalled();
  });

  it("accepts a valid same-origin submission and actually calls Resend", async () => {
    const res = await POST(makeRequest(validBody, { ...sameOrigin, ...freshIp() }));
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
    expect(send).toHaveBeenCalledTimes(1);
    const sentWith = send.mock.calls[0][0];
    expect(sentWith.to).toEqual([expect.stringContaining("@")]);
    expect(sentWith.replyTo).toBe(validBody.email);
  });

  it("rate-limits after 5 submissions from the same IP within the window", async () => {
    const ip = freshIp();
    for (let i = 0; i < 5; i++) {
      const res = await POST(makeRequest(validBody, { ...sameOrigin, ...ip }));
      expect(res.status).toBe(200);
    }
    const sixth = await POST(makeRequest(validBody, { ...sameOrigin, ...ip }));
    expect(sixth.status).toBe(429);
    expect(sixth.headers.get("Retry-After")).toBeTruthy();
  });

  it("returns 500 with a clear message if RESEND_API_KEY is missing, without crashing", async () => {
    const original = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;
    try {
      const res = await POST(makeRequest(validBody, { ...sameOrigin, ...freshIp() }));
      expect(res.status).toBe(500);
      const data = await res.json();
      expect(data.error).toBeTruthy();
    } finally {
      process.env.RESEND_API_KEY = original;
    }
  });
});
