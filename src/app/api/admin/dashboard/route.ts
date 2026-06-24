import { adminApiHandler } from "@/lib/asyncHandler";
import Contact from "@/models/contact";
import Education from "@/models/education";
import Experience from "@/models/experience";
import Project from "@/models/project";
import Skill from "@/models/skill";
import { NextResponse } from "next/server";

export const GET = adminApiHandler(async () => {
    const totalContacts = await Contact.count();
    const totalProjects = await Project.count();
    const totalEducation = await Education.count();
    const totalExpereince = await Experience.count();
    const totalSkils = await Skill.count();
    if(!totalContacts || !totalProjects || !totalEducation || !totalExpereince || !totalSkils) return NextResponse.json({ success: false, message: "Failed to fetch!" }, { status: 400 });

    return NextResponse.json({ success: true, message: "Dashboard data fetched successfully!", data: { totalContacts, totalProjects, totalEducation, totalExpereince, totalSkils } });
})

