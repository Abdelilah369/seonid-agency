"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

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

const COPY = {
  en: {
    title: "Run a Real Pre-Check on Your Site",
    subtitle: "This checks live: response time, HTTPS, page title, meta description, mobile viewport tag, and structured data — right now, against the URL you enter.",
    placeholder: "https://your-website.com",
    scan: "Scan",
    scanning: "Checking your site live…",
    scoreLabel: "Automated pre-check score",
    scoreOutOf: "out of",
    ttfb: "Response time",
    httpsCheck: "HTTPS enabled",
    titleCheck: "Title tag present",
    descCheck: "Meta description present",
    viewportCheck: "Mobile viewport tag present",
    schemaCheck: "Structured data (JSON-LD) found",
    pass: "Pass",
    fail: "Missing",
    disclaimer: "This is a fast, automated pre-check of 7 surface-level signals — it doesn't replace a full technical audit. That's what the 48-hour deliverable covers.",
    ctaFull: "Start a project with full technical review",
    tryAnother: "Check another URL",
    errorPrefix: "Couldn't run the check:",
  },
  fr: {
    title: "Lancez un vrai pré-diagnostic de votre site",
    subtitle: "Cet outil vérifie en direct : temps de réponse, HTTPS, balise titre, meta description, balise viewport mobile, et données structurées — maintenant, sur l'URL que vous entrez.",
    placeholder: "https://votre-site.com",
    scan: "Analyser",
    scanning: "Vérification en direct de votre site…",
    scoreLabel: "Score du pré-diagnostic automatisé",
    scoreOutOf: "sur",
    ttfb: "Temps de réponse",
    httpsCheck: "HTTPS activé",
    titleCheck: "Balise titre présente",
    descCheck: "Meta description présente",
    viewportCheck: "Balise viewport mobile présente",
    schemaCheck: "Données structurées (JSON-LD) trouvées",
    pass: "OK",
    fail: "Manquant",
    disclaimer: "Ceci est un pré-diagnostic automatisé rapide sur 7 signaux de surface — il ne remplace pas une analyse technique complète.",
    ctaFull: "Démarrer un projet avec audit complet",
    tryAnother: "Vérifier une autre URL",
    errorPrefix: "Impossible d'effectuer la vérification :",
  },
  ar: {
    title: "شغّل فحصاً حقيقياً لموقعك",
    subtitle: "تتحقق هذه الأداة الآن مباشرة من: زمن الاستجابة، HTTPS، وسم العنوان، الوصف التعريفي، وسم العرض للجوال، والبيانات المهيكلة — على الرابط الذي تدخله.",
    placeholder: "https://your-website.com",
    scan: "فحص",
    scanning: "جارٍ فحص موقعك مباشرة…",
    scoreLabel: "نتيجة الفحص الآلي المبدئي",
    scoreOutOf: "من",
    ttfb: "زمن الاستجابة",
    httpsCheck: "HTTPS مفعّل",
    titleCheck: "وسم العنوان موجود",
    descCheck: "الوصف التعريفي موجود",
    viewportCheck: "وسم العرض للجوال موجود",
    schemaCheck: "بيانات مهيكلة (JSON-LD) موجودة",
    pass: "ناجح",
    fail: "مفقود",
    disclaimer: "هذا فحص آلي سريع لـ 7 مؤشرات أساسية — لا يغني عن مراجعة تقنية كاملة عند بدء المشروع.",
    ctaFull: "ابدأ مشروعك بفحص تقني شامل",
    tryAnother: "افحص رابطاً آخر",
    errorPrefix: "تعذّر إجراء الفحص:",
  },
};

function ScoreRow({ label, pass, passLabel, failLabel }: { label: string; pass: boolean; passLabel: string; failLabel: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/40 py-3 text-[13.5px] last:border-b-0">
      <span className="text-ink-muted">{label}</span>
      <span className={`inline-flex items-center gap-1.5 font-semibold ${pass ? "text-emerald-600" : "text-red-500"}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${pass ? "bg-emerald-500" : "bg-red-500"}`} />
        {pass ? passLabel : failLabel}
      </span>
    </div>
  );
}

export default function LiveAuditScanner({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "scanning" | "done" | "error">("idle");
  const [result, setResult] = useState<ScanResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleScan(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;
    setStatus("scanning");
    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data: ScanResult | ScanError = await res.json();
      if (!data.ok) {
        setErrorMsg(data.error);
        setStatus("error");
        return;
      }
      setResult(data);
      setStatus("done");
    } catch {
      setErrorMsg("Network error — please try again.");
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setResult(null);
    setUrl("");
  }

  if (status === "done" && result) {
    return (
      <div className="animate-in fade-in zoom-in duration-500 rounded-3xl border border-border bg-surface-2/60 p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-faint" dir="ltr">{result.finalUrl}</p>
            <p className="mt-1 font-display text-[15px] font-bold text-ink">
              {t.scoreLabel}: <span className="text-accent-deep">{result.score}</span> {t.scoreOutOf} {result.maxScore}
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-bg p-5">
          <ScoreRow label={t.ttfb} pass={result.responseTimeMs < 1500} passLabel={`${result.responseTimeMs}ms`} failLabel={`${result.responseTimeMs}ms`} />
          <ScoreRow label={t.httpsCheck} pass={result.https} passLabel={t.pass} failLabel={t.fail} />
          <ScoreRow label={t.titleCheck} pass={result.hasTitle} passLabel={t.pass} failLabel={t.fail} />
          <ScoreRow label={t.descCheck} pass={result.hasMetaDescription} passLabel={t.pass} failLabel={t.fail} />
          <ScoreRow label={t.viewportCheck} pass={result.hasViewportMeta} passLabel={t.pass} failLabel={t.fail} />
          <ScoreRow label={t.schemaCheck} pass={result.hasJsonLd} passLabel={result.hasJsonLd ? `${t.pass} (${result.jsonLdCount})` : t.fail} failLabel={t.fail} />
        </div>
        <p className="mt-5 text-[12px] leading-relaxed text-ink-faint">{t.disclaimer}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/${locale}/audit`} className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-bold text-[#1a1206] transition-colors hover:bg-accent-deep">
            {t.ctaFull}
          </Link>
          <button onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-[14px] font-semibold text-ink-muted transition-colors hover:text-ink">
            {t.tryAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2/60 p-8 shadow-2xl backdrop-blur-xl transition-all min-h-[420px] flex flex-col justify-center">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-accent blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500 blur-[100px]" />
      </div>

      <div className="text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-card border border-border shadow-inner">
          <span className="text-2xl">🔎</span>
        </div>

        <h3 className="font-display text-[22px] font-bold text-ink">{t.title}</h3>
        <p className="mt-2 text-[14px] text-ink-muted max-w-sm mx-auto">{t.subtitle}</p>

        {status === "idle" && (
          <form onSubmit={handleScan} className="mt-8 flex items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t.placeholder}
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-accent"
              dir="ltr"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-ink px-6 py-3 text-[14px] font-bold text-bg transition-transform hover:scale-[1.02] active:scale-95"
            >
              {t.scan}
            </button>
          </form>
        )}

        {status === "scanning" && (
          <div className="mt-10 mx-auto max-w-sm">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            <p className="mt-4 font-mono text-[11px] font-medium tracking-wide text-ink-muted" dir="ltr">
              {t.scanning}
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-8 mx-auto max-w-sm">
            <p className="text-[13.5px] font-medium text-red-500">{t.errorPrefix} {errorMsg}</p>
            <button onClick={reset} className="mt-4 rounded-xl border border-border px-5 py-2.5 text-[13px] font-semibold text-ink-muted transition-colors hover:text-ink">
              {t.tryAnother}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
