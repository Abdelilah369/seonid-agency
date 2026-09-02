"use client";

import type { Locale } from "@/lib/i18n";

const POINTS: Record<Locale, { label: string; points: string[] }> = {
  en: {
    label: "Free 14-point website & SEO self-check",
    points: [
      "Load time on a 4G connection (time to first content)",
      "Core Web Vitals: LCP, CLS, INP measured in the field",
      "Crawlability: is Google reaching every important page?",
      "Robots.txt and sitemap.xml correctness",
      "Canonical + hreflang for every locale (EN/FR/AR)",
      "JSON-LD structured data: Organization, Service, FAQ, Article",
      "Heading hierarchy: one H1, logical H2/H3 flow",
      "Meta title/description uniqueness and length",
      "Image compression + alt coverage",
      "Internal linking from high-authority pages",
      "Mobile viewport + tap targets (no horizontal scroll)",
      "AI-search visibility: does ChatGPT/Perplexity cite you?",
      "Form/contact reliability (no silent failures)",
      "Privacy, GDPR-adjacent, and legal page completeness",
    ],
  },
  fr: {
    label: "Auto-vérification gratuite en 14 points (site & SEO)",
    points: [
      "Temps de chargement sur une connexion 4G",
      "Core Web Vitals : LCP, CLS, INP mesurés sur le terrain",
      "Crawlabilité : Google atteint-il chaque page importante ?",
      "Exactitude de robots.txt et du sitemap.xml",
      "Canonical + hreflang pour chaque langue (FR/EN/AR)",
      "Données structurées JSON-LD : Organization, Service, FAQ, Article",
      "Hiérarchie des titres : un H1, un flux H2/H3 logique",
      "Unicité et longueur des balises title/description",
      "Compression des images + couverture des attributs alt",
      "Maillage interne depuis les pages à forte autorité",
      "Viewport mobile + zones tactiles (pas de défilement horizontal)",
      "Visibilité recherche IA : ChatGPT/Perplexity vous citent-ils ?",
      "Fiabilité du formulaire de contact (aucun échec silencieux)",
      "Confidentialité, conformité et pages légales complètes",
    ],
  },
  ar: {
    label: "قائمة الفحص الذاتي المجانية — 14 نقطة (موقع وسيو)",
    points: [
      "زمن التحميل على اتصال 4G (وقت ظهور أول محتوى)",
      "مؤشرات Core Web Vitals: LCP وCLS وINP مقاسة ميدانيًا",
      "قابلية الفحص: هل يصل Google إلى كل صفحة مهمة؟",
      "سلامة ملف robots.txt وخريطة الموقع sitemap.xml",
      "الكنونيكال وhreflang لكل لغة (عربي/فرنسي/إنجليزي)",
      "البيانات المنظمة JSON-LD: المنظمة والخدمة والأسئلة الشائعة والمقال",
      "تسلسل العناوين: عنوان H1 واحد وتدفق منطقي H2/H3",
      "تفرد وطول وسوم العنوان والوصف لكل صفحة",
      "ضغط الصور وتغطية نصوص alt البديلة",
      "الربط الداخلي من الصفحات عالية السلطة",
      "توافق الجوال ومناطق اللمس (بدون تمرير أفقي)",
      "الظهور في البحث بالذكاء الاصطناعي: هل تستشهد بك ChatGPT/Perplexity؟",
      "موثوقية نموذج التواصل (لا فشل صامت)",
      "اكتمال صفحات الخصوصية والشروط القانونية",
    ],
  },
};

export default function AuditChecklist({ locale }: { locale: Locale }) {
  const data = POINTS[locale] || POINTS.en;

  return (
    <div className="mt-10 rounded-3xl border border-accent/25 bg-surface p-7 sm:p-9">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            {locale === "ar" ? "قبل أن تدفع لأي وكالة" : locale === "fr" ? "Avant de payer une agence" : "Before you pay any agency"}
          </p>
          <h3 className="mt-2 font-display text-[22px] font-bold text-ink">{data.label}</h3>
          <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink-muted">
            {locale === "ar"
              ? "14 نقطة يمكنك التحقق منها بنفسك في أقل من ساعة — مجانًا، بدون أدوات مدفوعة. استخدمها كقائمة مراجعة لموقعك، واحصل على تقييمنا التفصيلي عبر التدقيق المجاني."
              : locale === "fr"
              ? "14 points vérifiables par vous-même en moins d'une heure — gratuitement, sans outils payants. Utilisez-la comme liste de contrôle pour votre site, puis obtenez notre évaluation détaillée via l'audit gratuit."
              : "14 checks you can verify yourself in under an hour — free, no paid tools. Run it against your site, then get our full-depth read via the free audit."}
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent/20"
        >
          <span aria-hidden>⬇</span>
          {locale === "ar" ? "اطبع القائمة أو احفظ PDF" : locale === "fr" ? "Imprimer / Enregistrer en PDF" : "Print / save as PDF"}
        </button>
      </div>

      <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
        {data.points.map((p, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-xl border border-border bg-bg/60 px-4 py-3 text-[13.5px] leading-relaxed text-ink-muted"
          >
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border border-accent/40 font-mono text-[10px] font-bold text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}