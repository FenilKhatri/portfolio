import { NextRequest } from "next/server";

export type HandlerContext = {
  params?: any;
};

export type ApiHandler = (
  req: NextRequest,
  context: HandlerContext
) => Promise<Response> | Response;

export type ApiResponse<T = any> = {
  success: boolean;
  message?: string;
  data?: T;
  errors?: any;
};
