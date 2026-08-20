import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/process">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return { title: dict.process.meta.title, description: dict.process.meta.description };
}

export default async function ProcessPage({
  params,
}: PageProps<"/[locale]/process">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.process;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
          {t.eyebrow}
        </p>
        <h1 className="mt-5 max-w-[24ch] text-balance font-display text-[38px] font-semibold leading-[1.1] tracking-tight sm:text-[46px]">
          {t.headline}
        </h1>
        <WovenDivider className="mt-6 max-w-[160px]" />
        <p className="mt-7 max-w-[60ch] text-[16.5px] leading-relaxed text-ink-muted">
          {t.intro}
        </p>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-[24px] font-semibold tracking-tight sm:text-[28px]">
            {t.matrixHeadline}
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {t.criteria.map((c) => (
              <div key={c.name} className="bg-bg p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[15.5px] font-semibold text-ink">{c.name}</h3>
                  <span className="font-display text-[15px] font-semibold text-accent-deep">
                    {c.weight}
                  </span>
                </div>
                <p className="mt-2.5 text-[13.75px] leading-relaxed text-ink-muted">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-[24px] font-semibold tracking-tight sm:text-[28px]">
          {t.principlesHeadline}
        </h2>
        <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
          {t.principlesIntro}
        </p>
        <ol className="mt-10 space-y-0 divide-y divide-border border-t border-border">
          {t.principles.map((p, i) => (
            <li key={p} className="flex gap-5 py-5">
              <span className="font-display text-[18px] font-semibold text-accent-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[14.75px] leading-relaxed text-ink-muted">{p}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
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
