import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import { getDictionary } from "@/lib/dictionaries";
import { makeAlternates } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return {
    title: dict.blog.meta.title,
    description: dict.blog.meta.description,
    alternates: makeAlternates(locale, "/blog"),
  };
}

export default async function BlogPage({
  params,
}: PageProps<"/[locale]/blog">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.blog;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
        {t.eyebrow}
      </p>
      <h1 className="mt-5 max-w-[20ch] text-balance font-display text-[34px] font-semibold leading-[1.1] tracking-tight sm:text-[40px]">
        {t.headline}
      </h1>
      <WovenDivider className="mt-6 max-w-[140px]" />
      <p className="mt-6 max-w-[54ch] text-[15.5px] leading-relaxed text-ink-muted">
        {t.intro}
      </p>

      {/* Articles Grid */}
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {t.articles?.map((article, i) => {
          const slug = i === 0 ? "12-agency-benchmark" : "moroccan-b2b-seo-gap";
          return (
            <Link
              key={i}
              href={`/${locale}/blog/${slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:border-accent hover:shadow-xl sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-[12px] font-semibold text-accent-deep">
                  <span className="rounded-full bg-accent/15 px-3 py-1">{article.tag}</span>
                  <span className="text-ink-faint">{article.readTime}</span>
                </div>
                <h2 className="mt-5 font-display text-[22px] font-bold leading-snug text-ink transition-colors group-hover:text-accent-deep">
                  {article.title}
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
                  {article.summary}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-[13px] text-ink-faint">
                <span>{article.date} · SEONID Research</span>
                <span className="font-semibold text-accent-deep transition-transform group-hover:translate-x-1">Read article →</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center sm:p-10">
        <h3 className="font-display text-[22px] font-semibold text-ink">
          {t.ctaHeadline}
        </h3>
        <div className="mt-6 flex justify-center">
          <CtaButton href={`/${locale}/audit`}>{t.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
