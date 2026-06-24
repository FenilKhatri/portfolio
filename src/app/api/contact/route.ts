import Contact from "@/models/contact";
import { NextRequest, NextResponse } from "next/server";

export const POST = async(req: NextRequest) => {

    try{
        const { name, email, message} = await req.json();
        if(!name || !email || !message) return NextResponse.json({success: false, message: "All fields are required!"}, {status: 400});

        const contact = await Contact.create({
            name: name,
            email: email,
            message: message
        });

        return NextResponse.json({ success: true, message: "Message sent successfully!", data: contact}, { status: 200 });
    }catch(error){
        console.log(error);
        return NextResponse.json({ success: false, message: "Failed to send message!"}, { status: 500 });
    }

};