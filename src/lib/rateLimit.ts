/**
 * In-memory fixed-window rate limiter, keyed by caller IP.
 *
 * Deliberately zero-dependency and zero-cost — no external store, no
 * account to sign up for. The tradeoff: state lives in the serverless
 * function's memory, so it's per-instance, not shared across regions or
 * cold starts. That's fine for what this protects (a low-traffic contact
 * form): it stops a casual script loop cold, which is the realistic
 * threat here. It will NOT stop a distributed attacker spreading requests
 * across many function instances — if this form ever sees real abuse at
 * that level, replace this with a shared store (e.g. Upstash Redis, which
 * has a free tier and an official @upstash/ratelimit package) instead of
 * trying to harden this further.
 */

type Entry = { count: number; resetAt: number };

const hits = new Map<string, Entry>();

// Bound memory: without this, an attacker rotating IPs (or just many
// distinct legitimate visitors) would grow this map forever until the
// next cold start.
const MAX_TRACKED_KEYS = 5000;

export function checkRateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): { ok: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.resetAt <= now) {
    if (hits.size >= MAX_TRACKED_KEYS) hits.clear();
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= limit) {
    return { ok: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { ok: true, retryAfterSeconds: 0 };
}

/** Best-effort caller IP from the headers a proxy (Vercel included) sets. */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}
