import Profile from "@/models/profile";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        await connectDB();
        const profileData = await Profile.findAll();
        return NextResponse.json({ success: true, message: "Profile fetched successfully!", data: profileData }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "internal Server Error!" }, { status: 500 });
    }
}