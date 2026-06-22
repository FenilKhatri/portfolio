import { verifyAdmin } from "@/lib/auth";
import { NextResponse } from "next/server";

export const adminVerification = async () => {
  const isAdmin = await verifyAdmin();

    if(!isAdmin) {
        return NextResponse.json({
            success: false,
            message: "Unauthorized!",
        }, { status: 401 });
    };
}