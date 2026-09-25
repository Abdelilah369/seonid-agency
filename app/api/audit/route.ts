import { NextResponse } from "next/server";

// Sends free-audit submissions to Resend as a real email. Requires
// RESEND_API_KEY (Project Settings -> Environment Variables on Vercel).
// Without it, submissions are rejected with a clear error instead of
// silently accepted and discarded.
const NOTIFY_TO = "abdelilah.karroumi@ump.ac.ma";
const NOTIFY_FROM = "Seonid Agency <onboarding@resend.dev>";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.email || !body.url) {
    return NextResponse.json(
      { error: "Email and website URL are required." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email)) {
    return NextResponse.json(
      { error: "That email address doesn't look valid." },
      { status: 400 },
    );
  }

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    console.error("[audit] RESEND_API_KEY is not set — cannot deliver this submission.");
    return NextResponse.json(
      { error: "Submissions aren't being accepted right now. Please email us directly instead." },
      { status: 503 },
    );
  }

  const name = typeof body.name === "string" && body.name.trim() ? body.name.trim() : "(no name given)";
  const message = typeof body.message === "string" && body.message.trim() ? body.message.trim() : "(no message)";

  const html = `
    <p><strong>New free-audit request</strong></p>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(body.email)}</li>
      <li><strong>Website:</strong> ${escapeHtml(body.url)}</li>
    </ul>
    <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: NOTIFY_FROM,
      to: [NOTIFY_TO],
      reply_to: body.email,
      subject: `Free audit request — ${body.url}`,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[audit] Resend send failed:", res.status, detail);
    return NextResponse.json(
      { error: "Something went wrong sending your request. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
