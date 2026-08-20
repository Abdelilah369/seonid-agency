import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
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
        <div className="max-w-[62ch] space-y-6 text-[16px] leading-relaxed text-ink-muted">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-accent-deep">Founder & Consultant</p>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink">
              {t.placeholder}
            </p>
          </div>
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
