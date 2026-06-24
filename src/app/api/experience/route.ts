import Experience from "@/models/experience";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const experience = await Experience.findAll({
            order: [["createdAt", "DESC"]]
        });
        return NextResponse.json({ success: true, message: "Experience fetched successfully", data: experience });
    } catch (error) {
        console.log("Error fetching experience", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
};