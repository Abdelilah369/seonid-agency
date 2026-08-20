import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import HeroFilm from "@/components/HeroFilm";
import WovenDivider from "@/components/WovenDivider";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.home;

  return (
    <>
      <HeroFilm locale={locale} dict={dict} />

      {/* ---------- Process — a threaded sequence, not a feature grid ---------- */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-[28ch] text-balance font-display text-[28px] font-semibold tracking-tight sm:text-[32px]">
            {t.processHeadline}
          </h2>
          <div className="relative mt-14 max-w-[62ch] ps-9 sm:ps-11">
            <div
              aria-hidden="true"
              className="absolute top-1 bottom-1 start-[7px] w-px bg-gradient-to-b from-accent via-border to-border sm:start-[9px]"
            />
            {t.process.map((step) => (
              <div key={step.n} className="relative pb-12 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -start-9 top-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg sm:-start-11 sm:h-[18px] sm:w-[18px]"
                />
                <span className="font-display text-[13px] font-semibold text-accent-deep">
                  {step.n} — {step.title}
                </span>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Proof: the research behind this site ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-[22ch] text-balance font-display text-[28px] font-semibold tracking-tight sm:text-[32px]">
          {t.proofHeadline}
        </h2>
        <p className="mt-5 max-w-[62ch] text-[15.5px] leading-relaxed text-ink-muted">
          {t.proofBody}
        </p>

        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-y border-border py-5 font-display text-[15px]">
          {t.proofStats.map((s) => (
            <div key={s.l} className="flex items-baseline gap-2">
              <dd className="font-semibold text-ink">{s.n}</dd>
              <dt className="font-body text-[13px] text-ink-faint">{s.l}</dt>
            </div>
          ))}
        </dl>

        <Link
          href={`/${locale}/process`}
          className="mt-6 inline-block text-[15px] font-semibold text-ink underline decoration-border decoration-2 underline-offset-4 hover:decoration-accent"
        >
          {t.proofLink}
        </Link>
      </section>

      {/* ---------- Services — one panel, split by the woven seam, not two cards ---------- */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-[24ch] text-balance font-display text-[28px] font-semibold tracking-tight sm:text-[32px]">
            {t.servicesHeadline}
          </h2>
          <div className="relative mt-12 grid overflow-hidden rounded-2xl border border-border bg-bg sm:grid-cols-2">
            <div className="p-8 sm:p-10">
              <h3 className="font-display text-[20px] font-semibold text-ink">
                {t.serviceDesignTitle}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
                {t.serviceDesignBody}
              </p>
            </div>
            <div className="border-t border-border p-8 sm:border-t-0 sm:p-10">
              <h3 className="font-display text-[20px] font-semibold text-ink">
                {t.serviceGrowthTitle}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
                {t.serviceGrowthBody}
              </p>
            </div>
            <WovenDivider className="absolute top-1/2 start-1/2 hidden w-[120px] -translate-x-1/2 -translate-y-1/2 rotate-90 sm:block" />
          </div>
          <Link
            href={`/${locale}/services`}
            className="mt-8 inline-block text-[15px] font-semibold text-ink underline decoration-border decoration-2 underline-offset-4 hover:decoration-accent"
          >
            {t.servicesLink}
          </Link>
        </div>
      </section>

      {/* ---------- Local + international ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="max-w-[42ch] text-balance font-display text-[26px] font-medium leading-[1.3] tracking-tight text-ink sm:text-[30px]">
            {t.localHeadlinePart1}{" "}
            <span className="text-ink-faint">{t.localHeadlinePart2}</span>
          </p>
          <p className="mt-5 max-w-[54ch] text-[14.5px] leading-relaxed text-ink-muted">
            {t.localBody}
          </p>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <WovenDivider className="mx-auto mb-8 max-w-[140px]" />
          <h2 className="mx-auto max-w-[20ch] text-balance font-display text-[28px] font-semibold tracking-tight sm:text-[34px]">
            {t.finalHeadline}
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-[15.5px] leading-relaxed text-ink-muted">
            {t.finalSub}
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href={`/${locale}/audit`}>{t.finalCta}</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
