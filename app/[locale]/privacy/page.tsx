import type { Metadata } from "next";
import WovenDivider from "@/components/WovenDivider";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy — SEONID AGENCY",
    description: "Privacy policy and data protection practices at SEONID AGENCY.",
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = (await params) as { locale: Locale };
  const isAr = locale === "ar";
  const isFr = locale === "fr";

  return (
    <section className="mx-auto max-w-4xl px-6 pt-16 pb-24">
      <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
        {isAr ? "الخصوصية وحماية البيانات" : isFr ? "Confidentialité & Données" : "Legal & Privacy"}
      </p>
      <h1 className="mt-4 font-display text-[36px] font-bold text-ink">
        {isAr ? "سياسة الخصوصية" : isFr ? "Politique de Confidentialité" : "Privacy Policy"}
      </h1>
      <WovenDivider className="mt-6 max-w-[140px]" />

      <div className="mt-10 space-y-8 text-[15.5px] leading-relaxed text-ink-muted">
        <p>
          {isAr
            ? "نحن في وكالة SEONID نحترم خصوصيتك بالكامل. لا نستخدم أدوات التتبع المتطفلة أو بيع البيانات لأطراف ثالثة."
            : isFr
              ? "Chez SEONID AGENCY, nous respectons scrupuleusement la confidentialité de vos données professionnelles. Nous ne vendons aucune information à des tiers."
              : "At SEONID AGENCY, we take data privacy and intellectual property with utmost seriousness. We never sell or share your business information with third parties."}
        </p>

        <h2 className="font-display text-[22px] font-semibold text-ink">
          {isAr ? "البيانات التي نجمعها" : isFr ? "Données collectées" : "Information We Collect"}
        </h2>
        <p>
          {isAr
            ? "عند طلب التدقيق المجاني، نقوم بجمع اسمك، بريدك الإلكتروني، ورابط موقعك فقط لإعداد التقرير وإرساله إليك."
            : isFr
              ? "Lorsque vous demandez un audit gratuit, nous collectons uniquement votre nom, email professionnel et URL pour générer et expédier votre livrable sous 48h."
              : "When requesting a free website audit, we only collect your name, business email, and website URL solely to analyze and deliver your 48h report."}
        </p>

        <h2 className="font-display text-[22px] font-semibold text-ink">
          {isAr ? "التواصل معنا" : isFr ? "Contact" : "Contact"}
        </h2>
        <p>
          {isAr ? "لأي استفسار بخصوص بياناتك، يرجى مراسلتنا على:" : isFr ? "Pour toute question relative à vos données :" : "For any privacy questions, contact us directly at:"}{" "}
          <a href="mailto:hello@seonid.agency" className="font-semibold text-accent-deep hover:underline">
            hello@seonid.agency
          </a>
        </p>
      </div>
    </section>
  );
}
