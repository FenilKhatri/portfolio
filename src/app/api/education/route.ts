import Education from "@/models/education";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const education = await Education.findAll({
            order: [["createdAt", "DESC"]]
        });
        return NextResponse.json({ success: true, message: "Education fetched successfully", data: education });
    } catch (error) {
        console.log("Error fetching education", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
};