import { NextResponse } from "next/server";

interface ScanResult {
  ok: true;
  finalUrl: string;
  httpStatus: number;
  responseTimeMs: number;
  https: boolean;
  hasTitle: boolean;
  titleLength: number;
  hasMetaDescription: boolean;
  hasViewportMeta: boolean;
  hasJsonLd: boolean;
  jsonLdCount: number;
  score: number;
  maxScore: number;
}

interface ScanError {
  ok: false;
  error: string;
}

const PRIVATE_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^0\.0\.0\.0$/,
  /^::1$/,
  /^10\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^192\.168\./,
  /^169\.254\./,
];

function isBlockedHost(hostname: string): boolean {
  return PRIVATE_HOST_PATTERNS.some((pattern) => pattern.test(hostname));
}

export async function POST(request: Request): Promise<NextResponse<ScanResult | ScanError>> {
  const body = await request.json().catch(() => null);
  const rawUrl = typeof body?.url === "string" ? body.url.trim() : "";

  if (!rawUrl) {
    return NextResponse.json({ ok: false, error: "A URL is required." }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(rawUrl.match(/^https?:\/\//i) ? rawUrl : `https://${rawUrl}`);
  } catch {
    return NextResponse.json({ ok: false, error: "That doesn't look like a valid URL." }, { status: 400 });
  }

  if (target.protocol !== "http:" && target.protocol !== "https:") {
    return NextResponse.json({ ok: false, error: "Only http/https URLs are supported." }, { status: 400 });
  }
  if (isBlockedHost(target.hostname)) {
    return NextResponse.json({ ok: false, error: "That host can't be scanned." }, { status: 400 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  const startedAt = Date.now();

  let response: Response;
  try {
    response = await fetch(target.toString(), {
      signal: controller.signal,
      redirect: "follow",
      headers: { "User-Agent": "SEONID-Audit-Scanner/1.0 (+https://seonid.agency)" },
    });
  } catch {
    clearTimeout(timeout);
    return NextResponse.json(
      { ok: false, error: "Couldn't reach that site — it may be down, blocking automated requests, or too slow to respond." },
      { status: 200 }
    );
  }
  clearTimeout(timeout);

  const responseTimeMs = Date.now() - startedAt;

  const reader = response.body?.getReader();
  let html = "";
  if (reader) {
    const decoder = new TextDecoder();
    let bytesRead = 0;
    const CAP = 200_000;
    while (bytesRead < CAP) {
      const { done, value } = await reader.read();
      if (done) break;
      bytesRead += value.byteLength;
      html += decoder.decode(value, { stream: true });
    }
    reader.cancel().catch(() => {});
  }

  const hasTitle = /<title[^>]*>([^<]+)<\/title>/i.test(html);
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const titleLength = titleMatch ? titleMatch[1].trim().length : 0;
  const hasMetaDescription = /<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i.test(html);
  const hasViewportMeta = /<meta[^>]+name=["']viewport["']/i.test(html);
  const jsonLdMatches = html.match(/<script[^>]+type=["']application\/ld\+json["']/gi) || [];

  const checks = [
    response.ok,
    target.protocol === "https:",
    hasTitle && titleLength > 0 && titleLength <= 60,
    hasMetaDescription,
    hasViewportMeta,
    jsonLdMatches.length > 0,
    responseTimeMs < 1500,
  ];
  const score = checks.filter(Boolean).length;

  return NextResponse.json({
    ok: true,
    finalUrl: response.url || target.toString(),
    httpStatus: response.status,
    responseTimeMs,
    https: target.protocol === "https:",
    hasTitle,
    titleLength,
    hasMetaDescription,
    hasViewportMeta,
    hasJsonLd: jsonLdMatches.length > 0,
    jsonLdCount: jsonLdMatches.length,
    score,
    maxScore: checks.length,
  });
}
