import type { Metadata } from "next";
import WovenDivider from "@/components/WovenDivider";
import CtaButton from "@/components/CtaButton";
import { getDictionary } from "@/lib/dictionaries";
import { makeAlternates } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return {
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
    alternates: makeAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.contact;

  return (
    <div className="bg-[#080a0d] min-h-[75vh] py-24 text-[#f5f3ec]">
      <section className="relative overflow-hidden mx-auto max-w-6xl px-6">
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-[#d4973b]/10 blur-[140px]" />
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
          <span>{t.eyebrow}</span>
        </div>
        <h1 className="mt-5 max-w-[20ch] text-balance font-display text-[36px] font-bold leading-[1.1] tracking-tight sm:text-[46px] text-white">
          {t.headline}
        </h1>
        <WovenDivider className="mt-6 max-w-[140px]" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="max-w-[52ch] space-y-5 text-[16px] leading-relaxed text-slate-300">
            <p>{t.p1}</p>
            <p>
              {t.p2Pre}{" "}
              <a
                href="mailto:hello@seonid.agency"
                dir="ltr"
                className="font-mono font-semibold text-[#d4973b] underline decoration-[#d4973b]/40 decoration-2 underline-offset-4 hover:text-[#e5ad58]"
              >
                hello@seonid.agency
              </a>
            </p>
            <p className="font-mono text-[13px] text-slate-500">{t.location}</p>

            <div className="pt-4">
              <CtaButton href={`/${locale}/audit`}>{t.cta}</CtaButton>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0c0f14] p-8 font-mono text-xs text-slate-400 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[#d4973b]">
              <span>DIRECT INBOX DISPATCH</span>
              <span>24H SLA</span>
            </div>
            <div className="mt-4 space-y-2 text-slate-300">
              <p>📍 Location: Casablanca &amp; Rabat, Morocco</p>
              <p>🌐 Timezone: GMT+1 (Aligned with UK, EU &amp; US East)</p>
              <p>⚡ Direct Channel: Dedicated Slack / WhatsApp for Client Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
