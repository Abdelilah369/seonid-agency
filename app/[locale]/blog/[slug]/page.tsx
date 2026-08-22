import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

interface ArticleDetail {
  slug: string;
  tag: string;
  readTime: string;
  date: string;
  title: string;
  summary: string;
  sections: {
    heading: string;
    paragraphs: string[];
    stat?: { value: string; label: string };
  }[];
}

const ARTICLES_EN: Record<string, ArticleDetail> = {
  "12-agency-benchmark": {
    slug: "12-agency-benchmark",
    tag: "Benchmark Study",
    readTime: "6 min read",
    date: "August 2026",
    title: "The 12-Agency Benchmark: What Top MENA & Global Web Agencies Do Differently",
    summary: "We audited 12 web agencies across Morocco, the MENA region, and international markets against a 6-factor weighted scorecard. Here are the 9 principles that separate high-growth sites from pretty digital brochures.",
    sections: [
      {
        heading: "1. The Two-Vendor Trap: Why Design & SEO Are Broken When Bought Apart",
        paragraphs: [
          "Most Moroccan and MENA businesses buy website design from a creative agency, and six months later hire a separate SEO freelancer when nobody visits. By that point, the entire tech stack (slow JavaScript hydration, bloated CMS plugins, missing semantic hierarchy) is fighting against indexation.",
          "Our audit revealed that 75% of agencies scored below 40% on technical SEO depth because their primary deliverable was visual aesthetics, not discoverability."
        ],
        stat: { value: "75%", label: "of evaluated agencies failed Core Web Vitals" }
      },
      {
        heading: "2. The Weighted Scoring Matrix",
        paragraphs: [
          "We evaluated every agency across 6 clear dimensions: Reputation & Verifiable Reviews (20%), Results Evidence & Numbers (20%), UX & Visual Hierarchy (15%), Messaging & Positioning (15%), Content & SEO Depth (15%), and Conversion Architecture (15%).",
          "The top 10% shared one universal trait: they communicated a single, numeric value proposition above the fold rather than generic slogans like 'We craft digital experiences'."
        ],
        stat: { value: "3.4x", label: "higher conversion rate for numeric value propositions" }
      },
      {
        heading: "3. The 9 High-Growth Build Principles",
        paragraphs: [
          "1. Above-the-fold formula: Specific audience + quantified outcome.",
          "2. Real proof stacks with verifiable client numbers, not placeholder logos.",
          "3. Before → After → Revenue metric in every case study.",
          "4. Single, high-priority CTA repeated consistently across the user journey.",
          "5. Zero-friction audit offer with 48h SLA to eliminate initial buyer hesitation."
        ]
      }
    ]
  },
  "moroccan-b2b-seo-gap": {
    slug: "moroccan-b2b-seo-gap",
    tag: "Technical SEO",
    readTime: "8 min read",
    date: "August 2026",
    title: "Why 80% of Moroccan B2B Websites Fail at Search Engine Growth",
    summary: "Anatomy of the two-vendor trap: why buying design from one agency and bolting on SEO later results in slow load times, missing JSON-LD schema, and zero high-intent organic leads.",
    sections: [
      {
        heading: "1. The Local Search Reality in Morocco",
        paragraphs: [
          "Moroccan business decision-makers search primarily in French and English for B2B solutions, yet over 80% of corporate websites are missing proper hreflang tags, structured Organization schema, or dedicated keyword landing pages.",
          "As a result, international competitors and aggregator directories easily outrank local market leaders on their own brand terms."
        ],
        stat: { value: "80%", label: "of local B2B sites lack JSON-LD structured data" }
      },
      {
        heading: "2. Technical Core: Speed, TTFB & Core Web Vitals",
        paragraphs: [
          "Mobile network latency across North Africa means Time to First Byte (TTFB) and Largest Contentful Paint (LCP) are paramount. A site loading in 4.2 seconds loses over 53% of incoming B2B traffic before the hero section renders.",
          "Modern SSG (Static Site Generation) with edge caching delivers sub-800ms load times globally without costly server overhead."
        ],
        stat: { value: "<0.8s", label: "Target LCP for optimal organic rankings" }
      },
      {
        heading: "3. The Actionable Remedy",
        paragraphs: [
          "To fix this gap, companies must unify design, copywriting, and search engine architecture into a single engineering cycle. Every page must be designed with semantic H1-H3 structures, schema markup, and clear commercial intent."
        ]
      }
    ]
  }
};

const ARTICLES_FR: Record<string, ArticleDetail> = {
  "12-agency-benchmark": {
    slug: "12-agency-benchmark",
    tag: "Étude comparative",
    readTime: "Lecture de 6 min",
    date: "Août 2026",
    title: "Le benchmark des 12 agences : ce que font différemment les meilleures agences web au Maroc/MENA et à l'international",
    summary: "Nous avons audité 12 agences web au Maroc, dans la région MENA et sur des marchés internationaux selon une grille pondérée à 6 critères. Voici les 9 principes qui distinguent les sites à forte croissance des simples brochures numériques.",
    sections: [
      {
        heading: "1. Le piège des deux prestataires : pourquoi design et SEO échouent quand on les achète séparément",
        paragraphs: [
          "La plupart des entreprises marocaines et de la région MENA achètent la conception de leur site à une agence créative, puis engagent six mois plus tard un freelance SEO séparé quand personne ne visite le site. À ce stade, toute la stack technique (hydratation JavaScript lente, plugins CMS surchargés, hiérarchie sémantique absente) travaille déjà contre l'indexation.",
          "Notre audit a révélé que 75 % des agences obtenaient un score inférieur à 40 % sur la profondeur SEO technique, car leur livrable principal était l'esthétique visuelle, pas la découvrabilité."
        ],
        stat: { value: "75%", label: "des agences évaluées ont échoué aux Core Web Vitals" }
      },
      {
        heading: "2. La matrice de notation pondérée",
        paragraphs: [
          "Nous avons évalué chaque agence selon 6 dimensions claires : Réputation et avis vérifiables (20 %), Preuves de résultats chiffrés (20 %), UX et hiérarchie visuelle (15 %), Message et positionnement (15 %), Profondeur du contenu et SEO (15 %), et Architecture de conversion (15 %).",
          "Les 10 % les mieux notées partageaient un trait universel : elles communiquaient une proposition de valeur chiffrée et unique dès le haut de page, plutôt que des slogans génériques comme « Nous créons des expériences numériques »."
        ],
        stat: { value: "3.4x", label: "taux de conversion plus élevé pour les propositions de valeur chiffrées" }
      },
      {
        heading: "3. Les 9 principes de construction à forte croissance",
        paragraphs: [
          "1. Formule au-dessus de la ligne de flottaison : audience précise + résultat chiffré.",
          "2. Piles de preuves réelles avec des chiffres clients vérifiables, pas de logos de remplissage.",
          "3. Indicateur Avant → Après → Chiffre d'affaires dans chaque étude de cas.",
          "4. Un seul CTA prioritaire, répété de manière cohérente tout au long du parcours utilisateur.",
          "5. Offre d'audit sans friction avec un engagement de 48h pour éliminer l'hésitation initiale de l'acheteur."
        ]
      }
    ]
  },
  "moroccan-b2b-seo-gap": {
    slug: "moroccan-b2b-seo-gap",
    tag: "SEO technique",
    readTime: "Lecture de 8 min",
    date: "Août 2026",
    title: "Pourquoi 80 % des sites B2B marocains échouent en croissance via les moteurs de recherche",
    summary: "Anatomie du piège des deux prestataires : pourquoi acheter le design à une agence puis ajouter le SEO après coup entraîne des temps de chargement lents, une absence de schéma JSON-LD, et zéro lead organique à forte intention.",
    sections: [
      {
        heading: "1. La réalité de la recherche locale au Maroc",
        paragraphs: [
          "Les décideurs d'entreprises marocaines recherchent principalement en français et en anglais des solutions B2B, pourtant plus de 80 % des sites d'entreprise n'ont pas de balises hreflang correctes, de schéma Organization structuré, ni de pages de destination dédiées par mot-clé.",
          "En conséquence, des concurrents internationaux et des annuaires agrégateurs surpassent facilement les leaders du marché local, même sur leurs propres termes de marque."
        ],
        stat: { value: "80%", label: "des sites B2B locaux n'ont pas de données structurées JSON-LD" }
      },
      {
        heading: "2. Le socle technique : vitesse, TTFB et Core Web Vitals",
        paragraphs: [
          "La latence des réseaux mobiles en Afrique du Nord rend le Time to First Byte (TTFB) et le Largest Contentful Paint (LCP) primordiaux. Un site qui charge en 4,2 secondes perd plus de 53 % du trafic B2B entrant avant même l'affichage de la section hero.",
          "La génération de site statique (SSG) moderne avec mise en cache en périphérie (edge) permet des temps de chargement inférieurs à 800 ms à l'échelle mondiale, sans coût serveur élevé."
        ],
        stat: { value: "<0.8s", label: "LCP cible pour un classement organique optimal" }
      },
      {
        heading: "3. La solution concrète",
        paragraphs: [
          "Pour combler cet écart, les entreprises doivent unifier design, rédaction et architecture pour les moteurs de recherche en un seul cycle d'ingénierie. Chaque page doit être conçue avec une structure sémantique H1-H3, un balisage schema, et une intention commerciale claire."
        ]
      }
    ]
  }
};

const ARTICLES_AR: Record<string, ArticleDetail> = {
  "12-agency-benchmark": {
    slug: "12-agency-benchmark",
    tag: "دراسة مقارنة",
    readTime: "قراءة 6 دقائق",
    date: "أغسطس 2026",
    title: "معيار الـ12 وكالة: ما الذي تفعله أفضل وكالات الويب في المغرب/الشرق الأوسط وعالمياً بشكل مختلف",
    summary: "دقّقنا في 12 وكالة ويب في المغرب ومنطقة الشرق الأوسط وشمال إفريقيا والأسواق الدولية وفق بطاقة تقييم مرجّحة من 6 معايير. إليك المبادئ التسعة التي تميّز المواقع عالية النمو عن مجرد كتيّبات رقمية جميلة.",
    sections: [
      {
        heading: "1. فخ المزوّدَين: لماذا يفشل التصميم وتحسين محركات البحث عند شرائهما بشكل منفصل",
        paragraphs: [
          "تشتري معظم الشركات المغربية وشركات منطقة الشرق الأوسط وشمال إفريقيا تصميم مواقعها من وكالة إبداعية، ثم توظّف بعد ستة أشهر مستقلاً متخصصاً في تحسين محركات البحث عندما لا يزورها أحد. عند تلك المرحلة، تكون البنية التقنية بأكملها (تحميل JavaScript بطيء، إضافات CMS مثقلة، غياب البنية الدلالية) تعمل ضد الفهرسة أصلاً.",
          "كشف تدقيقنا أن 75% من الوكالات حصلت على أقل من 40% في عمق تحسين محركات البحث التقني، لأن مخرجها الأساسي كان الجمالية البصرية لا إمكانية الاكتشاف."
        ],
        stat: { value: "75%", label: "من الوكالات المقيَّمة أخفقت في اختبار Core Web Vitals" }
      },
      {
        heading: "2. مصفوفة التقييم المرجّحة",
        paragraphs: [
          "قيّمنا كل وكالة عبر 6 أبعاد واضحة: السمعة والتقييمات القابلة للتحقق (20%)، أدلة النتائج والأرقام (20%)، تجربة المستخدم والتسلسل البصري (15%)، الرسالة والتموضع (15%)، عمق المحتوى وتحسين محركات البحث (15%)، وبنية التحويل (15%).",
          "شاركت أفضل 10% سمة واحدة مشتركة: كانت تُبلّغ عن اقتراح قيمة رقمي واحد وواضح أعلى الصفحة، بدلاً من شعارات عامة مثل «نحن نصنع تجارب رقمية»."
        ],
        stat: { value: "3.4x", label: "معدل تحويل أعلى للاقتراحات ذات القيمة الرقمية" }
      },
      {
        heading: "3. المبادئ التسعة لبناء مواقع عالية النمو",
        paragraphs: [
          "1. صيغة أعلى الصفحة: جمهور محدد + نتيجة مقاسة رقمياً.",
          "2. طبقات إثبات حقيقية بأرقام عملاء قابلة للتحقق، لا شعارات نائبة.",
          "3. مؤشر قبل ← بعد ← الإيراد في كل دراسة حالة.",
          "4. دعوة واحدة ذات أولوية عالية للتحويل، مكررة باستمرار عبر رحلة المستخدم.",
          "5. عرض تدقيق بلا احتكاك مع التزام تسليم خلال 48 ساعة لإزالة تردد المشتري الأولي."
        ]
      }
    ]
  },
  "moroccan-b2b-seo-gap": {
    slug: "moroccan-b2b-seo-gap",
    tag: "تحسين محركات البحث التقني",
    readTime: "قراءة 8 دقائق",
    date: "أغسطس 2026",
    title: "لماذا تفشل 80% من مواقع الشركات B2B المغربية في النمو عبر محركات البحث",
    summary: "تشريح فخ المزوّدَين: لماذا يؤدي شراء التصميم من وكالة ثم إضافة تحسين محركات البحث لاحقاً إلى بطء أوقات التحميل، وغياب بيانات JSON-LD المهيكلة، وصفر عملاء محتملين عضويين ذوي نية شراء عالية.",
    sections: [
      {
        heading: "1. واقع البحث المحلي في المغرب",
        paragraphs: [
          "يبحث صناع القرار في الشركات المغربية بشكل أساسي بالفرنسية والإنجليزية عن حلول B2B، ومع ذلك يفتقر أكثر من 80% من مواقع الشركات إلى وسوم hreflang الصحيحة، أو بيانات Organization المهيكلة، أو صفحات هبوط مخصصة للكلمات المفتاحية.",
          "نتيجة لذلك، يتفوّق المنافسون الدوليون والأدلة المجمِّعة بسهولة على قادة السوق المحلي حتى على مصطلحات علامتهم التجارية الخاصة."
        ],
        stat: { value: "80%", label: "من مواقع B2B المحلية تفتقر إلى بيانات JSON-LD المهيكلة" }
      },
      {
        heading: "2. النواة التقنية: السرعة وTTFB ومؤشرات Core Web Vitals",
        paragraphs: [
          "يجعل زمن استجابة الشبكات المحمولة في شمال إفريقيا من زمن الوصول لأول بايت (TTFB) وأكبر عنصر مرئي (LCP) أمرَين حاسمَين. الموقع الذي يُحمَّل خلال 4.2 ثانية يخسر أكثر من 53% من زيارات B2B الواردة قبل أن يظهر القسم الرئيسي حتى.",
          "يوفّر التوليد الساكن الحديث للمواقع (SSG) مع التخزين المؤقت الطرفي أوقات تحميل أقل من 800 ملي ثانية عالمياً دون تكلفة خوادم مرتفعة."
        ],
        stat: { value: "<0.8s", label: "هدف LCP لتحقيق أفضل ترتيب عضوي" }
      },
      {
        heading: "3. الحل العملي",
        paragraphs: [
          "لسدّ هذه الفجوة، يجب على الشركات توحيد التصميم والكتابة وبنية محركات البحث في دورة هندسية واحدة. يجب تصميم كل صفحة ببنية دلالية H1-H3، وبيانات schema مهيكلة، ونية تجارية واضحة."
        ]
      }
    ]
  }
};

const ARTICLES: Record<Locale, Record<string, ArticleDetail>> = {
  en: ARTICLES_EN,
  fr: ARTICLES_FR,
  ar: ARTICLES_AR,
};

export const articleSlugs = Object.keys(ARTICLES_EN);

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const article = ARTICLES[locale]?.[slug] || ARTICLES_EN["12-agency-benchmark"];
  return {
    title: `${article.title} — SEONID AGENCY`,
    description: article.summary,
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/[locale]/blog/[slug]">) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const dict = getDictionary(locale);
  const article = ARTICLES[locale]?.[slug];

  if (!article) {
    notFound();
  }

  const isAr = locale === "ar";
  const isFr = locale === "fr";

  const baseUrl = "https://seonid.agency";
  const pageUrl = `${baseUrl}/${locale}/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    url: pageUrl,
    inLanguage: locale,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Abdelilah Karroumi",
      jobTitle: "Founder & SEO Growth Consultant",
    },
    publisher: {
      "@type": "Organization",
      name: "SEONID AGENCY",
      url: baseUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/${locale}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: pageUrl },
    ],
  };

  return (
    <article className="mx-auto max-w-4xl px-6 pt-16 pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Back Link */}
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-accent-deep transition-colors hover:text-ink"
      >
        <span>←</span>
        <span>{isAr ? "العودة إلى المقالات" : isFr ? "Retour aux ressources" : "Back to Resources"}</span>
      </Link>

      {/* Header */}
      <header className="mt-8">
        <div className="flex items-center gap-3 text-[12.5px] font-semibold text-accent-deep">
          <span className="rounded-full bg-accent/15 px-3 py-1">{article.tag}</span>
          <span className="text-ink-faint">·</span>
          <span className="text-ink-faint">{article.readTime}</span>
          <span className="text-ink-faint">·</span>
          <span className="text-ink-faint">{article.date}</span>
        </div>

        <h1 className="mt-6 text-balance font-display text-[34px] font-bold leading-[1.15] tracking-tight sm:text-[44px] text-ink">
          {article.title}
        </h1>

        <WovenDivider className="mt-8 max-w-[160px]" />

        <p className="mt-6 text-[18px] leading-relaxed font-medium text-ink-muted">
          {article.summary}
        </p>

        <div className="mt-8 flex items-center gap-4 border-y border-border py-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-base font-bold text-accent-deep">
            AK
          </div>
          <div>
            <p className="text-[14px] font-semibold text-ink" dir="ltr">Abdelilah Karroumi</p>
            <p className="text-[12px] text-ink-faint">
              {isAr
                ? "المؤسس ومستشار نمو تحسين محركات البحث · الدار البيضاء، المغرب"
                : isFr
                ? "Fondateur & Consultant Croissance SEO · Casablanca, Maroc"
                : "Founder & SEO Growth Consultant · Casablanca, Morocco"}
            </p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="mt-12 space-y-12 text-[16.5px] leading-relaxed text-ink-muted">
        {article.sections.map((section, idx) => (
          <section key={idx} className="space-y-5">
            <h2 className="font-display text-[24px] font-semibold text-ink sm:text-[26px]">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
            {section.stat && (
              <div className="my-6 rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-7">
                <div className="font-display text-4xl font-black text-accent-deep">
                  {section.stat.value}
                </div>
                <p className="mt-2 text-[14px] font-semibold text-ink">
                  {section.stat.label}
                </p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-20 rounded-3xl border border-border bg-surface p-8 sm:p-12 text-center shadow-xl">
        <h3 className="font-display text-[26px] font-semibold text-ink">
          {isAr ? "هل ترغب في فحص موقعك وفق نفس هذه المعايير؟" : isFr ? "Envie d'auditer votre site avec cette méthodologie ?" : "Want this exact benchmark methodology run against your site?"}
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-[15px] text-ink-muted">
          {isAr ? "احصل على تدقيق تقني مكتوب وشامل لموقعك ومنافسيك خلال 48 ساعة بدون أي التزام." : isFr ? "Rapport d'audit complet et chiffré délivré en 48h sans aucun engagement commercial." : "Get a comprehensive written technical audit and competitor snapshot within 48 hours."}
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton href={`/${locale}/audit`}>
            {dict.home.heroCtaPrimary}
          </CtaButton>
        </div>
      </div>
    </article>
  );
}
