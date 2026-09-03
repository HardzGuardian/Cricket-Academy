import { Resend } from "resend";
import { ENQUIRY_RECIPIENT_EMAIL } from "@/lib/data";

// Lazily constructed so a missing key fails per-request (500 with a clear
// message) instead of crashing the route module at build/import time.
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

type Body = {
  name?: unknown;
  email?: unknown;
  mobile?: unknown;
  program?: unknown;
  message?: unknown;
  // Honeypot: a real visitor never sees or fills this field (hidden via
  // CSS, not `type="hidden"`, since some bots specifically skip those).
  // Anything non-empty here means a bot filled every field it could find.
  company?: unknown;
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
}

function isValidMobile(v: string) {
  return /^[0-9+\s-]{10,15}$/.test(v.trim());
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot tripped — pretend success so the bot doesn't learn anything,
  // but never actually send an email.
  if (isNonEmptyString(body.company)) {
    return Response.json({ ok: true });
  }

  const name = isNonEmptyString(body.name) ? body.name.trim() : "";
  const email = isNonEmptyString(body.email) ? body.email.trim() : "";
  const mobile = isNonEmptyString(body.mobile) ? body.mobile.trim() : "";
  const program = isNonEmptyString(body.program) ? body.program.trim() : "Not specified";
  const message = isNonEmptyString(body.message) ? body.message.trim() : "";

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!isValidEmail(email)) errors.email = "Enter a valid email address.";
  if (!isValidMobile(mobile)) errors.mobile = "Enter a 10-digit mobile number.";
  if (Object.keys(errors).length) {
    return Response.json({ errors }, { status: 422 });
  }

  const resend = getResend();
  if (!resend) {
    console.error("RESEND_API_KEY is not set — enquiry not sent:", { name, email, mobile });
    return Response.json(
      { error: "Email sending isn't configured on the server yet." },
      { status: 500 }
    );
  }

  try {
    const { error } = await resend.emails.send({
      // onboarding@resend.dev works without a verified domain, but can
      // only deliver to the email address the Resend account was signed
      // up with. Once a domain is verified, swap this for a real address
      // on it (e.g. enquiries@sunilcricketacademy.com).
      from: "Sunil Cricket Academy Website <onboarding@resend.dev>",
      to: [ENQUIRY_RECIPIENT_EMAIL],
      replyTo: email,
      subject: `New trial enquiry — ${name}`,
      html: `
        <h2>New enquiry from the website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
        <p><strong>Program:</strong> ${escapeHtml(program)}</p>
        ${message ? `<p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Could not send the enquiry." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Enquiry send failed:", err);
    return Response.json({ error: "Could not send the enquiry." }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
