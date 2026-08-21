import Link from "next/link";
import { getDictionary } from "@/lib/dictionaries";
import { type Locale } from "@/lib/i18n";
import WovenDivider from "@/components/WovenDivider";

export default async function PromoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const isAr = locale === "ar";

  return (
    <div className="bg-bg py-16 sm:py-24 text-ink">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent-deep">
              {isAr ? "العرض السينمائي الرسمي" : "Official Commercial Promo"}
            </p>
          </div>

          <h1 className="mt-6 font-display text-[36px] font-bold tracking-tight text-ink sm:text-[50px]">
            {isAr
              ? "هندسة مواقع حقيقية. نتائج مبنية على الدليل."
              : "Evidence-Based Web Systems, in Motion."}
          </h1>

          <WovenDivider className="mx-auto mt-6 max-w-[160px]" />

          <p className="mx-auto mt-6 max-w-2xl text-[16px] text-ink-muted">
            {isAr
              ? "شاهد كيف نهندس منصات رقمية فائقة السرعة تتصدر نتائج البحث وتضاعف الصفقات."
              : "Discover how SEONID engineers sub-second web platforms that dominate B2B search and convert high-ticket clients."}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-accent/40 bg-card p-4 shadow-2xl backdrop-blur-xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <video
              controls
              playsInline
              preload="auto"
              poster="/images/hero-cinematic.jpg"
              className="h-full w-full object-contain"
            >
              <source src="/promo/seonid_promo_cinematic.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Action Row */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 px-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                1080p 60fps · FastStart Web
              </span>
              <span className="text-xs text-ink-muted font-mono">35s · 7.6 MB</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/promo/seonid_promo_cinematic.mp4"
                download="SEONID_Agency_Promo.mp4"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-bold text-ink transition hover:bg-muted"
              >
                <span>↓ Download MP4</span>
              </a>

              <Link
                href={`/${locale}/audit`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-xs font-bold text-[#1a1206] shadow-md shadow-accent/20 transition hover:bg-accent-deep"
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
