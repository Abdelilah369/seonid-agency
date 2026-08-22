import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import SiteHealthScorecard from "@/components/SiteHealthScorecard";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return { title: dict.about.meta.title, description: dict.about.meta.description };
}

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.about;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
          {t.eyebrow}
        </p>
        <h1 className="mt-5 max-w-[22ch] text-balance font-display text-[38px] font-semibold leading-[1.1] tracking-tight sm:text-[46px]">
          {t.headline}
        </h1>
        <WovenDivider className="mt-6 max-w-[160px]" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:items-start">
          <div className="space-y-6 text-[16px] leading-relaxed text-ink-muted">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>

          {/* Founder Executive Card */}
          <div className="rounded-3xl border border-border bg-surface p-7 sm:p-8 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 border border-accent/30 font-display text-xl font-bold text-accent-deep">
                AK
              </div>
              <div>
                <h3 className="font-display text-[19px] font-semibold text-ink">
                  Abdelilah Karroumi
                </h3>
                <p className="text-[13px] font-medium text-accent-deep">
                  Founder & SEO Growth Consultant
                </p>
                <p className="text-[12px] text-ink-faint">
                  Casablanca, Morocco · Working Globally
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-border pt-5 text-[14.5px] leading-relaxed text-ink-muted">
              {t.placeholder}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 pt-2 text-[11.5px] font-semibold">
              <span className="rounded-full bg-surface-2 px-3 py-1 text-ink">
                No Account Managers
              </span>
              <span className="rounded-full bg-surface-2 px-3 py-1 text-ink">
                Direct Engineering
              </span>
              <span className="rounded-full bg-surface-2 px-3 py-1 text-ink">
                12-Agency Benchmark
              </span>
            </div>
          </div>
        </div>

        {/* High-Resolution Studio Photography Visual */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <img
              src="/images/hero-cinematic.jpg"
              alt="SEONID Agency Moroccan Architectural Studio"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">Studio & Laboratory</p>
                <p className="text-lg font-bold">Engineered in Morocco. Serving Enterprise Worldwide.</p>
              </div>
              <span className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-semibold backdrop-blur-md">
                Casablanca · Rabat · Remote
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <SiteHealthScorecard locale={locale} />
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-[24ch] text-balance font-display text-[26px] font-semibold tracking-tight sm:text-[30px]">
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
