import type { Metadata } from "next";
import WovenDivider from "@/components/WovenDivider";
import AuditForm from "@/components/AuditForm";
import LiveAuditScanner from "@/components/LiveAuditScanner";
import { getDictionary } from "@/lib/dictionaries";
import { makeAlternates } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/audit">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return {
    title: dict.audit.meta.title,
    description: dict.audit.meta.description,
    alternates: makeAlternates(locale, "/audit"),
  };
}

export default async function AuditPage({ params }: PageProps<"/[locale]/audit">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.audit;

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-24">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
          {t.eyebrow}
        </p>
        <h1 className="mt-4 text-balance font-display text-[36px] font-semibold leading-[1.1] tracking-tight sm:text-[44px]">
          {t.headline}
        </h1>
        <WovenDivider className="mt-6 max-w-[140px]" />
        <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
          {t.intro}
        </p>
      </div>

      {/* Main Grid: Visual Deliverable Mockup & Audit Request Form */}
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:items-start">
        {/* Left: Rich Visual Deliverable Showcase */}
        <div>
          <LiveAuditScanner locale={locale} />
        </div>

        {/* Right: Request Form Container */}
        <div className="rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-xl">
          <div className="mb-6 border-b border-border pb-4">
            <h2 className="font-display text-[20px] font-semibold text-ink">
              {locale === "ar" ? "ابدأ مشروعك الآن" : locale === "fr" ? "Démarrer un projet" : "Start a Project"}
            </h2>
            <p className="mt-1 text-[13px] text-ink-faint">
              {locale === "ar" ? "سنراجع تفاصيل مشروعك ونرسل خطة عمل تقنية خلال 24 ساعة." : locale === "fr" ? "Nous analysons votre projet et vous répondons sous 24h avec un plan technique." : "We'll review your project details and respond within 24h with next steps."}
            </p>
          </div>
          <AuditForm t={t.form} />
        </div>
      </div>
    </section>
  );
}
