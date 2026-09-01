import type { Metadata } from "next";
import WovenDivider from "@/components/WovenDivider";
import { makeAlternates } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  return {
    title: "Terms of Service — SEONID AGENCY",
    description: "Terms of engagement and service principles at SEONID AGENCY.",
    alternates: makeAlternates(locale, "/terms"),
  };
}

export default async function TermsPage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = (await params) as { locale: Locale };
  const isAr = locale === "ar";
  const isFr = locale === "fr";

  return (
    <section className="mx-auto max-w-4xl px-6 pt-16 pb-24">
      <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
        {isAr ? "الشروط والأحكام" : isFr ? "Conditions Générales" : "Terms & Conditions"}
      </p>
      <h1 className="mt-4 font-display text-[36px] font-bold text-ink">
        {isAr ? "شروط الخدمة" : isFr ? "Conditions Générales de Service" : "Terms of Service"}
      </h1>
      <WovenDivider className="mt-6 max-w-[140px]" />

      <div className="mt-10 space-y-8 text-[15.5px] leading-relaxed text-ink-muted">
        <p>
          {isAr
            ? "تحدد هذه الشروط معايير العمل مع وكالة SEONID الاستشارية للنمو الرقمي وبناء المواقع."
            : isFr
              ? "Ces conditions régissent les engagements de SEONID AGENCY dans le cadre de ses missions d'audit, de conception web et de conseil SEO."
              : "These terms define the collaboration and engagement standards with SEONID AGENCY for web engineering and SEO growth consulting."}
        </p>

        <h2 className="font-display text-[22px] font-semibold text-ink">
          {isAr ? "معايير التسليم والجودة" : isFr ? "Engagements & Qualité" : "Delivery Standards & SLAs"}
        </h2>
        <p>
          {isAr
            ? "نلتزم بتقديم تقارير التدقيق المكتوبة في غضون 48 ساعة من تاريخ الطلب. لا نستخدم أدوات تلقائية لتوليد تقارير عشوائية بل فحص بشري مباشر."
            : isFr
              ? "Nos audits gratuits sont rédigés et livrés sous 48 heures ouvrées avec une analyse humaine concrète."
              : "Free website audits are written and delivered within 48 business hours with direct human engineering analysis."}
        </p>

        <h2 className="font-display text-[22px] font-semibold text-ink">
          {isAr ? "الملكية الفكرية" : isFr ? "Propriété intellectuelle" : "Intellectual Property"}
        </h2>
        <p>
          {isAr
            ? "جميع الأصول البرمجية والتصميمات المسلّمة للعملاء تنتقل ملكيتها الكاملة للعميل فور استيفاء مستحقات المشروع."
            : isFr
              ? "Tous les livrables, codes sources et designs réalisés pour nos clients leur appartiennent intégralement."
              : "All codebases, design assets, and content architectures delivered to clients become 100% their property upon project completion."}
        </p>
      </div>
    </section>
  );
}
