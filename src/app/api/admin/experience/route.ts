import { asyncHandler } from "@/lib/asyncHandler";
import Experience from "@/models/experience";
import { NextResponse } from "next/server";

export const GET = asyncHandler(async () => {
  const experience = await Experience.findAll({
    order: [
      ['createdAt', 'DESC']
    ]
  });

  if (!experience) return NextResponse.json({ success: false, message: "Failed to fetch experience!" }, { status: 400 });

  if (experience.length === 0) return NextResponse.json({ success: true, message: "No experience found!", data: [] }, { status: 404 });

  return NextResponse.json({ success: true, message: "Experience fetched successfully", data: experience });
});

export const POST = asyncHandler(async (req) => {
  const body = await req.json();

  const expreience = await Experience.create({
    company: body.company,
    role: body.role,
    duration: body.duration,
    location: body.location,
    description: body.description,
  });

  return NextResponse.json({ success: true, message: "Experience created successfully", data: expreience });
});

export const PUT = asyncHandler(async (req) => {
  const body = await req.json();
  const { id } = body;

  let experienceData = await Experience.findOne({ where: { id } });
  if (!experienceData) return NextResponse.json({ success: false, message: "Experience not found!" }, { status: 404 });

  await Experience.update({
    company: body.company,
    role: body.role,
    duration: body.duration,
    location: body.location,
    description: body.description,
  }, { where: { id } });

  return NextResponse.json({ success: true, message: "Experience updated successfully", data: experienceData });
});

export const DELETE = asyncHandler(async (req) => {
  const body = await req.json();
  const { id } = body;

  const experienceData = await Experience.findOne({ where: { id } });
  if(!experienceData) return NextResponse.json({ success: false, message: "Experience not found!" }, { status: 404 });

  await Experience.destroy({ where: { id } });

  return NextResponse.json({ success: true, message: "Experience deleted successfully" });
});
