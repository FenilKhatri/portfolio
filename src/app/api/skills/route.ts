import Skill from "@/models/skill";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const skills = await Skill.findAll({
      order: [["createdAt", "DESC"]]
    });
    return NextResponse.json({ success: true, message: "Skills fetched successfully!", data: skills });
  } catch (error) {
    console.log("Error fetching skills", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
};