"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

interface ScanResult {
  ok: true;
  responseTimeMs: number;
  https: boolean;
  hasTitle: boolean;
  hasMetaDescription: boolean;
  hasViewportMeta: boolean;
  hasJsonLd: boolean;
  score: number;
  maxScore: number;
}

const COPY = {
  en: {
    label: "This site's own live score",
    subtitle: "We run the same automated pre-check on ourselves, in real time, every time this page loads.",
    loading: "Checking seonid.agency…",
    error: "Live check unavailable right now.",
  },
  fr: {
    label: "Le score en direct de ce site",
    subtitle: "Nous appliquons le même pré-diagnostic automatisé sur nous-mêmes, en temps réel, à chaque chargement de cette page.",
    loading: "Vérification de seonid.agency…",
    error: "Vérification en direct indisponible pour le moment.",
  },
  ar: {
    label: "النتيجة المباشرة لهذا الموقع",
    subtitle: "نطبّق الفحص الآلي نفسه على أنفسنا، مباشرة، في كل مرة تُحمَّل فيها هذه الصفحة.",
    loading: "جارٍ فحص seonid.agency…",
    error: "الفحص المباشر غير متاح حالياً.",
  },
};

export default function SiteHealthScorecard({ locale }: { locale: Locale }) {
  const t = COPY[locale];
  const [result, setResult] = useState<ScanResult | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: "https://seonid.agency" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.ok) setResult(data);
        else setFailed(true);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rounded-3xl border border-accent/30 bg-accent/5 p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-wider text-accent-deep">{t.label}</p>
          <p className="mt-1 max-w-md text-[13px] text-ink-muted">{t.subtitle}</p>
        </div>

        {result && (
          <div className="flex items-center gap-2 rounded-full border border-accent/40 bg-bg px-5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-display text-[20px] font-black text-ink">
              {result.score}/{result.maxScore}
            </span>
            <span className="text-[12px] text-ink-faint">· {result.responseTimeMs}ms</span>
          </div>
        )}

        {failed && (
          <div className="rounded-full border border-border bg-bg px-5 py-2.5 text-[12.5px] text-ink-faint">
            {t.error}
          </div>
        )}

        {!result && !failed && (
          <div className="flex items-center gap-2 rounded-full border border-border bg-bg px-5 py-2.5 text-[12.5px] text-ink-faint">
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-accent border-t-transparent" />
            {t.loading}
          </div>
        )}
      </div>
    </div>
  );
}
