import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ message: "Hi there!" });
    } catch (error) {
        return NextResponse.json({ error: "An error occurred" });
    }
}
