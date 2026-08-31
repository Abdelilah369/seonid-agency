import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static assets, next internal files, and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/videos") ||
    pathname.startsWith("/promo") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Handle regional Moroccan variants and aliases
  const lowerPath = pathname.toLowerCase();
  
  // Handle /fr-ma, /fr-fr, /fr_ma, /maroc, etc.
  if (lowerPath.startsWith("/fr-ma") || lowerPath.startsWith("/fr_ma") || lowerPath.startsWith("/fr-fr")) {
    const subPath = pathname.replace(/^\/fr[-_][a-zA-Z]+/i, "");
    return NextResponse.redirect(new URL(`/fr${subPath}`, request.url));
  }

  if (lowerPath.startsWith("/ar-ma") || lowerPath.startsWith("/ar_ma") || lowerPath.startsWith("/ar-sa")) {
    const subPath = pathname.replace(/^\/ar[-_][a-zA-Z]+/i, "");
    return NextResponse.redirect(new URL(`/ar${subPath}`, request.url));
  }

  if (lowerPath.startsWith("/en-ma") || lowerPath.startsWith("/en_ma") || lowerPath.startsWith("/en-us") || lowerPath.startsWith("/en-gb")) {
    const subPath = pathname.replace(/^\/en[-_][a-zA-Z]+/i, "");
    return NextResponse.redirect(new URL(`/en${subPath}`, request.url));
  }

  if (lowerPath === "/maroc" || lowerPath.startsWith("/maroc/")) {
    const subPath = pathname.replace(/^\/maroc/i, "");
    return NextResponse.redirect(new URL(`/fr${subPath}`, request.url));
  }

  if (lowerPath === "/morocco" || lowerPath.startsWith("/morocco/")) {
    const subPath = pathname.replace(/^\/morocco/i, "");
    return NextResponse.redirect(new URL(`/en${subPath}`, request.url));
  }

  // Check if pathname starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // If no locale in path, redirect to defaultLocale
  const targetLocale = defaultLocale;
  const redirectUrl = new URL(`/${targetLocale}${pathname === "/" ? "" : pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml).*)",
  ],
};
