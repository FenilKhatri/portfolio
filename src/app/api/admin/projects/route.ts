import { adminApiHandler } from "@/lib/asyncHandler";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export const GET = adminApiHandler(async () => {
  const projects = await Project.findAll({
    order: [["createdAt", "DESC"]]
  });

  if (!projects) return NextResponse.json({ success: false, message: "Failed to fetch projects!" }, { status: 400 });

  if (projects.length === 0) return NextResponse.json({ success: true, message: "No projects found!", data: [] }, { status: 404 });

  return NextResponse.json({ success: true, message: "Projects fetched successfully!", data: projects });
})

export const POST = adminApiHandler(async (req) => {
  const body = await req.json();

  const project = await Project.create({
    title: body.title,
    description: body.description,
    techStack: body.techStack,
    imageURL: body.image,
    githubURL: body.githubURL,
    liveURL: body.liveURL,
    projectStatus: body.projectStatus,
    featured: body.featured,
  })

  return NextResponse.json({ message: "Success", data: project })
});

export const PUT = adminApiHandler(async (req) => {
  const body = await req.json();
  const { id } = body;

  let projectData = await Project.findOne({ where: { id} });
  if (!projectData) return NextResponse.json({ success: false, message: "Project not found!" }, { status: 404 });

  await projectData.update({
    title: body.title,
    description: body.description,
    techStack: body.techStack,
    ...(body.imageURL && { imageURL: body.imageURL }),
    githubURL: body.githubURL,
    liveURL: body.liveURL,
    projectStatus: body.projectStatus,
    featured: body.featured,
  }, { where: { id } });

  return NextResponse.json({ success: true, message: "Project updated successfully!", data: projectData });
});

export const DELETE = adminApiHandler(async (req) => {
  const body = await req.json();
  const { id } = body;

  const projectData = await Project.findOne({ where: { id } });
  if (!projectData) return NextResponse.json({ success: false, message: "Project not found!" }, { status: 404 });

  await Project.destroy({ where: { id } });

  return NextResponse.json({ success: true, message: "Project deleted successfully" });
});