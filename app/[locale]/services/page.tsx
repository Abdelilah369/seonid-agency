import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return { title: dict.services.meta.title, description: dict.services.meta.description };
}

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/services">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.services;

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
        <p className="mt-7 max-w-[58ch] text-[16.5px] leading-relaxed text-ink-muted">
          {t.intro}
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="relative grid overflow-hidden rounded-2xl border border-border bg-bg sm:grid-cols-2">
            <div className="p-8 sm:p-10">
              <h2 className="font-display text-[22px] font-semibold">
                {t.designTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {t.design.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border p-8 sm:border-t-0 sm:p-10">
              <h2 className="font-display text-[22px] font-semibold">
                {t.growthTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {t.growth.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <WovenDivider className="absolute top-1/2 start-1/2 hidden w-[120px] -translate-x-1/2 -translate-y-1/2 rotate-90 sm:block" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="mx-auto max-w-[26ch] text-balance font-display text-[26px] font-semibold tracking-tight sm:text-[30px]">
          {t.ctaHeadline}
        </h2>
        <div className="mt-8 flex justify-center">
          <CtaButton href={`/${locale}/audit`}>{t.cta}</CtaButton>
        </div>
        <p className="mt-6 text-[14px] text-ink-faint">
          {t.orText} <Link href={`/${locale}/process`} className="underline decoration-border decoration-2 underline-offset-4 hover:decoration-accent">{t.orLink}</Link> {t.orSuffix}
        </p>
      </section>
    </>
  );
}
