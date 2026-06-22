import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "admin_token";
const ALG = "HS256";
const EXPIRY = "7d";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not defined");
  return new TextEncoder().encode(secret);
}

/**
 * Generate a signed JWT token using HS256.
 */
export async function generateToken(
  payload: Record<string, unknown>
): Promise<string> {
  return new SignJWT(payload as JWTPayload)
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime(EXPIRY)
    .sign(getSecret());
}

/**
 * Verify a JWT token. Returns the payload if valid, null otherwise.
 * Compatible with both Edge Runtime (middleware) and Node.js (API routes).
 */
export async function verifyToken(
  token: string
): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload;
  } catch {
    return null;
  }
}

/**
 * Set the auth cookie with an httpOnly, secure cookie.
 * Call from API routes only (uses next/headers).
 */
export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: MAX_AGE,
  });
}

/**
 * Remove the auth cookie.
 * Call from API routes only (uses next/headers).
 */
export async function removeAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/**
 * Verify the current user is an authenticated admin.
 * Reads the token from cookies and verifies it.
 * Use in Server Components and API routes.
 */
export async function verifyAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) return false;

  const payload = await verifyToken(token);
  return payload !== null;
}