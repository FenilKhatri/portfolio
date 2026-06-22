import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if(!email || !password) {
            return NextResponse.json({
                success: false,
                message: "Please fill all the fields!",
            }, {status: 400});
        };

        if (email !== process.env.ADMIN_EMAIL) {
            return NextResponse.json({
                success: false,
                message: "Invalid credentials",
            }, { status: 401 })
        }

        const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASS_HASH!);
        if(!isMatch) {
            return NextResponse.json({
                success: false,
                message: "Invalid credentials!",
            }, {status: 401})
        };

        const token = jwt.sign(
            {email},
            process.env.JWT_SECRET!,
            {expiresIn: "7d"}
        );

        const cookieStore = await cookies();
        cookieStore.set("admin_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

        return NextResponse.json({
            success: true,
            message: "Login successful!",
            token,
        }, {status: 200});

    } catch (error) {
        console.log("Failed to login!", error);
    }
};