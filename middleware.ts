import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("admin_token")?.value;
    const isLoginPage = req.nextUrl.pathname === "/admin/login";

    if(!token) {
        if(!isLoginPage) {
            return NextResponse.redirect(
                new URL("/admin/login", req.url)
            )
        };
        return NextResponse.next();
    };

    try {
        jwt.verify(token, process.env.JWT_SECRET!);

        if(isLoginPage) {
            return NextResponse.redirect(
                new URL("/admin/profile", req.url)
            )
        };
        return NextResponse.next();
        
    } catch (error) {
        return NextResponse.redirect(
            new URL("/admin/login", req.url)
        )
    }
}

export const config = {
    matcher: ["/admin/:path*"],
};