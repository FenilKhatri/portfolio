import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  const pathname = req.nextUrl.pathname;
  const isLoginPage = pathname === "/admin/login";

  // No token → allow login page, redirect everything else
  if (!token) {
    if (!isLoginPage) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    return NextResponse.next();
  }

  // Has token → verify it
  const payload = await verifyToken(token);

  if (!payload) {
    // Invalid/expired token → clear it and redirect to login
    const response = NextResponse.redirect(new URL("/admin/login", req.url));
    response.cookies.delete("admin_token");
    return response;
  }

  // Valid token + on login page → redirect to dashboard
  if (isLoginPage) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};