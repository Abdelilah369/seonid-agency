import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { makeAlternates } from "@/lib/metadata";
import { type Locale } from "@/lib/i18n";
import WovenDivider from "@/components/WovenDivider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Promo Film — SEONID AGENCY",
    description: "The SEONID agency commercial film.",
    alternates: makeAlternates(locale as Locale, "/promo"),
  };
}

export default async function PromoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isAr = locale === "ar";

  return (
    <div className="bg-[#080a0d] py-16 sm:py-24 text-[#f5f3ec]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#d4973b] animate-ping" />
            <p className="text-[12px] font-mono font-bold uppercase tracking-[0.14em] text-[#d4973b]">
              {isAr ? "العرض السينمائي الرسمي" : "Official Commercial Film"}
            </p>
          </div>

          <h1 className="mt-6 font-display text-[36px] font-bold tracking-tight text-white sm:text-[50px]">
            {isAr
              ? "هندسة مواقع حقيقية. نتائج مبنية على الدليل."
              : "Evidence-Based Web Engineering, in Motion."}
          </h1>

          <WovenDivider className="mx-auto mt-6 max-w-[160px]" />

          <p className="mx-auto mt-6 max-w-2xl text-[16px] text-slate-300">
            {isAr
              ? "شاهد كيف نهندس منصات رقمية فائقة السرعة تتصدر نتائج البحث وتضاعف الصفقات عبر الأتمتة."
              : "Discover how SEONID engineers sub-second web platforms and autonomous n8n workflows that dominate search and convert high-ticket clients."}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#d4973b]/30 bg-[#0c0f14] p-4 shadow-2xl backdrop-blur-xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <video
              controls
              playsInline
              preload="auto"
              poster="/images/hero-cinematic.jpg"
              className="h-full w-full object-contain"
            >
              <source src="/promo/seonid_promo_cinematic_web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Action Row */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 px-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-bold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                720p Web · FastStart
              </span>
              <span className="text-xs text-slate-400 font-mono">10s · 1.5 MB</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/promo/seonid_promo_cinematic_web.mp4"
                download="SEONID_Agency_Promo.mp4"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono font-bold text-white transition hover:bg-white/10"
              >
                <span>↓ Download MP4</span>
              </a>

              <Link
                href={`/${locale}/audit`}
                className="inline-flex items-center gap-2 rounded-full bg-[#d4973b] px-6 py-2.5 text-xs font-bold text-[#080a0d] shadow-lg shadow-[#d4973b]/20 transition hover:bg-[#e5ad58] hover:scale-105"
              >
                <span>{dict.nav.freeAudit}</span>
                <span className={isAr ? "rotate-180" : ""}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
