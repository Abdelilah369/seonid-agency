import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_TO = "hello@seonid.agency";
const NOTIFY_FROM = "SEONID Audit Requests <audit@seonid.agency>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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

  const name = typeof body.name === "string" ? body.name.slice(0, 200) : "";
  const email = String(body.email).slice(0, 200);
  const url = typeof body.url === "string" ? body.url.slice(0, 300) : "";
  const message = typeof body.message === "string" ? body.message.slice(0, 4000) : "";

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No email provider configured yet — accept the submission and log it
    // server-side rather than failing the request. Set RESEND_API_KEY in
    // the environment to start actually sending these.
    console.log("[audit request — RESEND_API_KEY not set, email not sent]", { name, email, url, message });
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New audit request: ${url || email}`,
      html: `
        <h2>New Free Audit Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name) || "(not provided)"}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Website URL:</strong> ${escapeHtml(url)}</p>
        <p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>") || "(none)"}</p>
      `,
    });

    if (error) {
      console.error("[audit request — Resend API error]", error);
      return NextResponse.json(
        { error: "We couldn't send that right now. Please try again shortly." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[audit request — unexpected email failure]", err);
    return NextResponse.json(
      { error: "We couldn't send that right now. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
