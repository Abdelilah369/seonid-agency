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
    <div className="bg-[#080a0d] text-[#f5f3ec]">
      <section className="relative overflow-hidden mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-[#d4973b]/10 blur-[140px]" />
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
          <span>{t.eyebrow}</span>
        </div>
        <h1 className="mt-5 max-w-[24ch] text-balance font-display text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[50px] text-white">
          {t.headline}
        </h1>
        <WovenDivider className="mt-6 max-w-[160px]" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:items-start">
          <div className="space-y-6 text-[16.5px] leading-relaxed text-slate-300">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>

          {/* Founder Executive Card */}
          <div className="rounded-3xl border border-white/10 bg-[#0c0f14] p-7 sm:p-8 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d4973b]/10 border border-[#d4973b]/30 font-mono text-lg font-bold text-[#d4973b]">
                AK
              </div>
              <div>
                <h3 className="font-display text-[19px] font-bold text-white">
                  Abdelilah Karroumi
                </h3>
                <p className="text-[12.5px] font-mono font-semibold text-[#d4973b]">
                  Principal Solutions Architect
                </p>
                <p className="text-[11.5px] text-slate-500">
                  Casablanca, Morocco · Global Clients
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-white/5 pt-5 text-[14px] leading-relaxed text-slate-400">
              {t.placeholder}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 pt-2 text-[11px] font-mono font-semibold">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                Zero Account Managers
              </span>
              <span className="rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3 py-1 text-[#d4973b]">
                Direct Technical Accountability
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300">
                Next.js &amp; n8n Core
              </span>
            </div>
          </div>
        </div>

        {/* High-Resolution Studio Visual */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <img
              src="/images/hero-cinematic.jpg"
              alt="SEONID Agency Moroccan Architectural Studio"
              className="h-full w-full object-cover grayscale opacity-70 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0d] via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4973b]">ENGINEERING STUDIO &amp; LAB</p>
                <p className="text-lg font-bold">Engineered in Morocco. Powering High-Performance Growth Globally.</p>
              </div>
              <span className="rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs font-mono font-semibold backdrop-blur-md text-slate-300">
                Casablanca · Rabat · Remote
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <SiteHealthScorecard locale={locale} />
        </div>

        <div className="mt-16 border-t border-white/10 pt-16 text-center">
          <h2 className="font-display text-[26px] font-bold text-white sm:text-[34px]">
            {t.ctaHeadline}
          </h2>
          <div className="mt-8 flex justify-center">
            <CtaButton href={`/${locale}/audit`}>{t.cta}</CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
