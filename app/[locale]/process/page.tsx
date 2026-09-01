import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import { getDictionary } from "@/lib/dictionaries";
import { makeAlternates } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/process">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return {
    title: dict.process.meta.title,
    description: dict.process.meta.description,
    alternates: makeAlternates(locale, "/process"),
  };
}

export default async function ProcessPage({
  params,
}: PageProps<"/[locale]/process">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.process;

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
        <p className="mt-7 max-w-[60ch] text-[16.5px] leading-relaxed text-slate-300">
          {t.intro}
        </p>
      </section>

      <section className="border-t border-white/5 bg-[#0a0d12] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-[24px] font-bold tracking-tight sm:text-[32px] text-white">
            {t.matrixHeadline}
          </h2>
          <div className="mt-10 grid gap-4 overflow-hidden sm:grid-cols-2">
            {t.criteria.map((c) => (
              <div key={c.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 transition-all hover:border-[#d4973b]/30 hover:bg-white/[0.04]">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[16px] font-bold text-white">{c.name}</h3>
                  <span className="font-mono text-[13px] font-bold text-[#d4973b] rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-2.5 py-0.5">
                    {c.weight}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-[24px] font-bold tracking-tight sm:text-[32px] text-white">
          {t.principlesHeadline}
        </h2>
        <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-slate-400">
          {t.principlesIntro}
        </p>
        <ol className="mt-10 space-y-0 divide-y divide-white/10 border-t border-white/10">
          {t.principles.map((p, i) => (
            <li key={p} className="flex gap-5 py-6">
              <span className="font-mono text-[16px] font-bold text-[#d4973b]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-relaxed text-slate-300">{p}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-white/10 bg-[#080a0d] py-24 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mx-auto max-w-[24ch] text-balance font-display text-[26px] font-bold tracking-tight sm:text-[34px] text-white">
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
