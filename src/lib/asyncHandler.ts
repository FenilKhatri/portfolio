import { NextRequest, NextResponse } from "next/server";
import { ApiHandler, HandlerContext } from "@/types/api";
import { connectDB } from "@/utils/db";
import { adminVerification } from "@/hooks/useAuth";

export const asyncHandler = (handler: ApiHandler) => {
  return async (req: NextRequest, context: HandlerContext) => {
    try {
      return await handler(req, context);
    } catch (error: any) {
      console.error(`[API Error] ${req.method} ${req.url}:`, error);

      const status = error.status || 500;
      const message = error.message || "Internal Server Error";

      return NextResponse.json(
        { success: false, message },
        { status }
      );
    }
  };
};

export const adminApiHandler = (handler: ApiHandler) => {
  return asyncHandler(async (req: NextRequest, context: HandlerContext) => {
    // 1. Ensure DB is connected
    await connectDB();

    // 2. Verify admin authentication
    const authError = await adminVerification();
    if (authError) {
      return authError; // Returns 401 Unauthorized if verification fails
    }

    // 3. Proceed to the actual route logic
    return await handler(req, context);
  });
};
