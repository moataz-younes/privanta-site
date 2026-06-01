import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let ratelimitInstance: Ratelimit | null = null;

/**
 * Returns the shared Upstash rate limiter (3 requests per IP per hour).
 */
function getRatelimit(): Ratelimit {
  if (!ratelimitInstance) {
    const redis = Redis.fromEnv();
    ratelimitInstance = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "1 h"),
      prefix: "privanta:contact",
      analytics: true,
    });
  }
  return ratelimitInstance;
}

export type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

/**
 * Checks whether the client IP is within the contact form rate limit.
 */
export async function checkContactRateLimit(
  identifier: string,
): Promise<RateLimitResult> {
  const ratelimit = getRatelimit();
  const result = await ratelimit.limit(identifier);

  return {
    success: result.success,
    limit: result.limit,
    remaining: result.remaining,
    reset: result.reset,
  };
}
