import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const cookieStore = await cookies();
        cookieStore.delete("admin_token");
        return NextResponse.json({
            success: true,
            message: "Logout successful!"
        }, {status: 200});
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Failed to logout!"
        });
    };
};
