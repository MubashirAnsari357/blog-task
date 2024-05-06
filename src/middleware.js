import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(req) {
  const cookieStore = cookies({ headers: req.headers });

  const user = cookieStore.get("user")?.value;

  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  if (pathname === "/login") {
    return NextResponse.next();
  }

  if (!user) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/create", "/[id]/edit", "/login"],
};
