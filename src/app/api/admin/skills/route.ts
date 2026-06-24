import { adminApiHandler } from "@/lib/asyncHandler";
import Skill from "@/models/skill";
import { NextResponse } from "next/server";

export const GET = adminApiHandler(async () => {

  const skills = await Skill.findAll({
    order: [
      ['createdAt', 'DESC']
    ]
  });

  if (!skills) return NextResponse.json({ success: false, message: "Failed to fetch skills!" }, { status: 400 });

  if (skills.length === 0) return NextResponse.json({ success: true, message: "No skills found!", data: [] }, { status: 404 });

  return NextResponse.json({ success: true, message: "Skills fetched successfully", data: skills });
});

export const POST = adminApiHandler(async (req) => {
  const body = await req.json();

  const skill = await Skill.create({
    category: body.category,
    skillName: body.skillName,
  })

  return NextResponse.json({ success: true, data: skill });
});

export const PUT = adminApiHandler(async (req) => {
  const body = await req.json();
  const { id } = body;

  let skillData = await Skill.findOne({ where: { id } });
  if (!skillData) return NextResponse.json({ success: false, message: "Skill not found!" }, { status: 404 });

  await Skill.update({
    category: body.category,
    skillName: body.skillName,
  }, { where: { id } });

  return NextResponse.json({ success: true, message: "Skill updated successfully!", data: skillData });
});

export const DELETE = adminApiHandler(async (req) => {
  const body = await req.json();
  const { id } = body;

  const skillData = await Skill.findOne({ where: { id } });
  if(!skillData) return NextResponse.json({ success: false, message: "Skill not found!" }, { status: 404 });

  await Skill.destroy({ where: { id } });

  return NextResponse.json({ success: true, message: "Skill deleted successfully" });
});