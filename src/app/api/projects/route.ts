import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await Project.findAll({
      order: [["createdAt", "DESC"]]
    });
    return NextResponse.json({ success: true, message: "Projects fetched successfully!", data: projects });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
};