import { verifyAdmin } from "@/lib/auth";
import { NextResponse } from "next/server";

/**
 * Server-side API route guard.
 * Call at the top of protected API route handlers.
 * Returns a 401 response if the user is not authenticated, or null if valid.
 */
export const adminVerification = async (): Promise<NextResponse | null> => {
  const isAdmin = await verifyAdmin();

  if (!isAdmin) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized!",
      },
      { status: 401 }
    );
  }

  return null;
};