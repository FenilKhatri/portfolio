import { adminApiHandler } from "@/lib/asyncHandler";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export const GET = adminApiHandler(async () => {

    const contact = await Contact.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    });
    if(!contact) return NextResponse.json({ success: false, message: "Failed to fetch contacts!" }, { status: 400 });

    if(contact.length === 0) return NextResponse.json({ success: true, message: "No contacts found!", data: [] }, { status: 404 });

    return NextResponse.json({ success: true, message: "Contacts fetched successfully!", data: contact });
});