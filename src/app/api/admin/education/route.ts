import { adminApiHandler } from "@/lib/asyncHandler";
import Education from "@/models/education";
import { NextResponse } from "next/server";

export const GET = adminApiHandler(async () => {
    const education = await Education.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    });
    if (!education) return NextResponse.json({ success: false, message: "Failed to fetch education!" }, { status: 400 });

    if (education.length === 0) return NextResponse.json({ success: true, message: "No education found!", data: [] }, { status: 404 });

    return NextResponse.json({ success: true, message: "Education fetched successfully!", data: education });
});

export const POST = adminApiHandler(async (req: any) => {
    try {
        const body = await req.json();

        const education = await Education.create({
            university: body.university,
            degree: body.degree,
            fieldOfStudy: body.fieldOfStudy || null,
            startDate: body.startDate,
            endDate: body.endDate,
            cgpa: body.cgpa || null,
        })

        return NextResponse.json({ success: true, data: education });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Internal Server Error!" });
    }
});

export const PUT = adminApiHandler(async (req) => {
    const body = await req.json();
    const { id } = body;

    const educationData = await Education.findOne({ where: { id } });
    if (!educationData) return NextResponse.json({ success: false, message: "Education not found!" }, { status: 404 });

    await educationData.update({
        university: body.university,
        degree: body.degree,
        fieldOfStudy: body.fieldOfStudy || null,
        startDate: body.startDate,
        endDate: body.endDate,
        cgpa: body.cgpa || null,
    });

    return NextResponse.json({ success: true, message: "Education updated successfully!" });
});

export const DELETE = adminApiHandler(async (req) => {
    const body = await req.json();
    const { id } = body;

    const educationData = await Education.findOne({ where: { id } });
    if (!educationData) return NextResponse.json({ success: false, message: "Education not found!" }, { status: 404 });

    await Education.destroy({ where: { id } });

    return NextResponse.json({ success: true, message: "Education deleted successfully!" });
});