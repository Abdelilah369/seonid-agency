"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

export default function AuditForm({ t }: { t: Dictionary["audit"]["form"] }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fallbackMailto, setFallbackMailto] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      url: form.get("url"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || t.genericError);
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      // Capture the values for a mailto fallback so the lead is never lost,
      // even if the email backend is down.
      setErrorMsg(err instanceof Error ? err.message : t.genericError);
      const fallback = `mailto:hello@seonid.agency?subject=${encodeURIComponent(
        `[Audit] ${payload.name} — ${payload.url}`
      )}&body=${encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nWebsite: ${payload.url}\n\n${payload.message || ""}`
      )}`;
      setFallbackMailto(fallback);
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="font-display text-[19px] font-semibold text-ink">{t.doneTitle}</p>
        <p className="mt-2 text-[14.5px] text-ink-muted">{t.doneBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[13.5px] font-medium text-ink">
          {t.name}
          <input
            name="name"
            type="text"
            required
            className="rounded-lg border border-border bg-bg px-4 py-2.5 text-[14.5px] text-ink outline-none focus:border-accent"
            placeholder={t.namePlaceholder}
          />
        </label>
        <label className="grid gap-1.5 text-[13.5px] font-medium text-ink">
          {t.email}
          <input
            name="email"
            type="email"
            dir="ltr"
            required
            className="rounded-lg border border-border bg-bg px-4 py-2.5 text-[14.5px] text-ink outline-none focus:border-accent"
            placeholder={t.emailPlaceholder}
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-[13.5px] font-medium text-ink">
        {t.url}
        <input
          name="url"
          type="text"
          dir="ltr"
          required
          className="rounded-lg border border-border bg-bg px-4 py-2.5 text-[14.5px] text-ink outline-none focus:border-accent"
          placeholder={t.urlPlaceholder}
        />
      </label>
      <label className="grid gap-1.5 text-[13.5px] font-medium text-ink">
        {t.message}
        <textarea
          name="message"
          rows={4}
          className="resize-none rounded-lg border border-border bg-bg px-4 py-2.5 text-[14.5px] text-ink outline-none focus:border-accent"
          placeholder={t.messagePlaceholder}
        />
      </label>

      {status === "error" && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
          <p className="text-[13.5px] text-red-600" role="alert">
            {errorMsg}
          </p>
          {fallbackMailto && (
            <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">
              {t.fallbackIntro}{" "}
              <a
                href={fallbackMailto}
                className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
              >
                {t.fallbackLink}
              </a>
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-[#1a1206] transition-colors hover:bg-accent-deep disabled:opacity-60"
      >
        {status === "loading" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
