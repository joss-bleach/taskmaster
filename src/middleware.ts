"use server";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./features/auth/actions";

import { AUTH_COOKIE } from "./features/auth/consts";

const publicRoutes = ["/sign-in", "/sign-up", "/api"];

export async function middleware(request: NextRequest) {
  const session = request.cookies.get(AUTH_COOKIE);

  const isPublicRoute = publicRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  try {
    const user = await getCurrentUser();

    if (!user && !isPublicRoute) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    if (user && isPublicRoute) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
