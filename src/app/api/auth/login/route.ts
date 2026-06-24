import bcrypt from "bcryptjs";
import { generateToken, setAuthCookie } from "@/lib/auth";
import { LoginSchema } from "@/lib/validations/auth";

import { asyncHandler } from "@/lib/asyncHandler";

export const POST = asyncHandler(async(req) => {
  const body = await req.json();

    const validated = LoginSchema.safeParse(body);

    if (!validated.success) {
      return Response.json(
        {
          success: false,
          errors: validated.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { email, password } = validated.data;

    if (email !== process.env.ADMIN_EMAIL) {
      return Response.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(
      password,
      process.env.ADMIN_PASS_HASH!
    );

    if (!isMatch) {
      return Response.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = await generateToken({ email });
    await setAuthCookie(token);

  return Response.json({
    success: true,
    message: "Login successful",
  });
});