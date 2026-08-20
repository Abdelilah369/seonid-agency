import type { Metadata } from "next";
import WovenDivider from "@/components/WovenDivider";
import AuditForm from "@/components/AuditForm";
import AuditDeliverableMockup from "@/components/AuditDeliverableMockup";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/audit">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return { title: dict.audit.meta.title, description: dict.audit.meta.description };
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
          <AuditDeliverableMockup locale={locale} />
        </div>

        {/* Right: Request Form Container */}
        <div className="rounded-3xl border border-border bg-surface p-7 sm:p-9 shadow-xl">
          <div className="mb-6 border-b border-border pb-4">
            <h2 className="font-display text-[20px] font-semibold text-ink">
              {locale === "ar" ? "طلب التدقيق المجاني" : locale === "fr" ? "Demandez votre audit gratuit" : "Request Your Free Audit"}
            </h2>
            <p className="mt-1 text-[13px] text-ink-faint">
              {locale === "ar" ? "تقرير مكتوب يصل إلى بريدك خلال 48 ساعة دون أي التزام." : locale === "fr" ? "Rapport complet livré par email sous 48h sans engagement." : "Comprehensive deliverable sent to your inbox within 48h."}
            </p>
          </div>
          <AuditForm t={t.form} />
        </div>
      </div>
    </section>
  );
}
