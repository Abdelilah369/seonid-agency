import type { Metadata } from "next";
import WovenDivider from "@/components/WovenDivider";
import AuditForm from "@/components/AuditForm";
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
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
      <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
            {t.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[16ch] text-balance font-display text-[36px] font-semibold leading-[1.1] tracking-tight sm:text-[42px]">
            {t.headline}
          </h1>
          <WovenDivider className="mt-6 max-w-[140px]" />
          <p className="mt-6 max-w-[46ch] text-[15.5px] leading-relaxed text-ink-muted">
            {t.intro}
          </p>

          {/* Visual deliverable preview */}
          <div className="mt-8 rounded-2xl border border-accent/40 bg-accent/5 p-5">
            <div className="flex items-center justify-between text-[12px] font-semibold text-accent-deep">
              <span>Sample Deliverable Preview</span>
              <span className="rounded-full bg-accent/20 px-2.5 py-0.5">48h Turnaround</span>
            </div>
            <div className="mt-3 space-y-2 text-[13px] text-ink-muted">
              <div className="flex items-center justify-between rounded-lg bg-surface px-3 py-2">
                <span>Core Web Vitals & Speed Index</span>
                <span className="font-semibold text-emerald-600">98 / 100</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-surface px-3 py-2">
                <span>Schema Markup & Search Intent</span>
                <span className="font-semibold text-accent-deep">Full Audit</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-surface px-3 py-2">
                <span>3 Prioritized Growth Fixes</span>
                <span className="font-semibold text-ink">Action Plan</span>
              </div>
            </div>
          </div>

          <ul className="mt-10 space-y-6">
            {t.included.map((item) => (
              <li key={item.title}>
                <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-7 sm:p-9">
          <AuditForm t={t.form} />
        </div>
      </div>
    </section>
  );
}
