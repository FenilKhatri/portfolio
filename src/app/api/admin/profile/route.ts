import { adminApiHandler } from "@/lib/asyncHandler";
import Profile from "@/models/profile";
import { NextResponse } from "next/server";

export const GET = adminApiHandler(async () => {
    const profileData = await Profile.findOne();
    return NextResponse.json({ success: true, message: "Profile fetched successfully!", data: profileData });
});

export const POST = adminApiHandler(async (req) => {
    const body = await req.json();
    
    let existingProfile = await Profile.findOne();
    if (existingProfile) {
        return NextResponse.json({ success: false, message: "Profile already exists. Use PUT to update." }, { status: 400 });
    }

    const profileData = await Profile.create({
        name: body.name,
        headline: body.headline,
        tagline: body.tagline,
        about: body.about,
        imageURL: body.profileImage || "",
        resumeURL: body.resume || "",
    });

    return NextResponse.json({ success: true, message: "Profile created successfully!", data: profileData });
});

export const PUT = adminApiHandler(async (req) => {
    const body = await req.json();

    let profileData = await Profile.findOne();
    if (!profileData) {
        return NextResponse.json({ success: false, message: "Profile not found." }, { status: 404 });
    }

    await profileData.update({
        name: body.name,
        headline: body.headline,
        tagline: body.tagline,
        about: body.about,
        ...(body.profileImage && { imageURL: body.profileImage }),
        ...(body.resume && { resumeURL: body.resume })
    });

    return NextResponse.json({ success: true, message: "Profile updated successfully!", data: profileData });
});