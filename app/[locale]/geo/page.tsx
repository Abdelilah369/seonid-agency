import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/geo">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return { title: dict.geo.meta.title, description: dict.geo.meta.description };
}

export default async function GeoPage({ params }: PageProps<"/[locale]/geo">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.geo;

  const baseUrl = "https://seonid.agency";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t.whatHeadline,
        acceptedAnswer: { "@type": "Answer", text: t.whatBody },
      },
      {
        "@type": "Question",
        name: t.diffHeadline,
        acceptedAnswer: { "@type": "Answer", text: t.diffBody },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
        <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
          {t.eyebrow}
        </p>
        <h1 className="mt-5 max-w-[20ch] text-balance font-display text-[38px] font-semibold leading-[1.1] tracking-tight sm:text-[48px] text-ink">
          {t.headline}
        </h1>
        <WovenDivider className="mt-6 max-w-[160px]" />
        <p className="mt-7 max-w-[64ch] text-[17px] leading-relaxed text-ink-muted">
          {t.intro}
        </p>
      </section>

      {/* What is GEO + Why we don't just claim it */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-bg p-8 sm:p-10 shadow-sm">
              <h2 className="font-display text-[22px] font-bold text-ink">{t.whatHeadline}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{t.whatBody}</p>
            </div>
            <div className="rounded-3xl border border-accent/30 bg-accent/5 p-8 sm:p-10 shadow-sm">
              <h2 className="font-display text-[22px] font-bold text-ink">{t.diffHeadline}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{t.diffBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation tracking log */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-[26px] font-bold tracking-tight text-ink sm:text-[30px]">
          {t.trackingHeadline}
        </h2>
        <p className="mt-4 max-w-[64ch] text-[15.5px] leading-relaxed text-ink-muted">
          {t.trackingBody}
        </p>

        <div className="mt-10 rounded-3xl border border-dashed border-border bg-surface p-8 sm:p-10 text-center">
          <p className="text-[14.5px] text-ink-faint">{t.trackingEmpty}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-[26ch] text-balance font-display text-[26px] font-semibold tracking-tight sm:text-[30px]">
            {t.ctaHeadline}
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href={`/${locale}/audit`}>{t.cta}</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
