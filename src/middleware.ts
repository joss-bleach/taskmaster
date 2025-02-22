import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "./supabase/middleware";
import { createClient } from "./supabase/client";

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if (request.nextUrl.pathname.includes("/sign-in") && user) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // if (request.nextUrl.pathname.includes("/sign-up") && user) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  // if (!request.nextUrl.pathname.includes("/sign-in") && !user) {
  //   return NextResponse.redirect(new URL("/sign-in", request.url));
  // }
  // if (!request.nextUrl.pathname.includes("/sign-up") && !user) {
  //   return NextResponse.redirect(new URL("/sign-in", request.url));
  // }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
