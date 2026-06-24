import { adminApiHandler } from "@/lib/asyncHandler";
import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export const POST = adminApiHandler(async (req) => {
    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { message: "No file provided" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const isPDF = file.type === "application/pdf" || file.name.endsWith(".pdf");

    const result: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "portfolio/projects",
            resource_type: isPDF ? "raw" : "auto",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      url: result.secure_url,
    });
});