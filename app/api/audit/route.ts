import { NextResponse } from "next/server";

// STUB — validates the request and returns success, but does not yet send
// an email or store the submission anywhere. Wire this up to a real
// provider (Resend, Formspree, a database, etc.) before launch — see
// build-brief.md. Until then, submissions are accepted but go nowhere.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.email || !body.url) {
    return NextResponse.json(
      { error: "Email and website URL are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    return NextResponse.json(
      { error: "That email address doesn't look valid." },
      { status: 400 }
    );
  }

  // TODO: forward `body` to a real email/CRM/notification integration.
  console.log("[audit request — not yet wired to a real backend]", body);

  return NextResponse.json({ ok: true });
}
