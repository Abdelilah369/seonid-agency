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

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const article = ARTICLES_EN[slug] || ARTICLES_EN["12-agency-benchmark"];
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
  const article = ARTICLES_EN[slug];

  if (!article) {
    notFound();
  }

  const isAr = locale === "ar";
  const isFr = locale === "fr";

  return (
    <article className="mx-auto max-w-4xl px-6 pt-16 pb-28">
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
            <p className="text-[14px] font-semibold text-ink">Abdelilah Karroumi</p>
            <p className="text-[12px] text-ink-faint">Founder & SEO Growth Consultant · Casablanca, Morocco</p>
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
