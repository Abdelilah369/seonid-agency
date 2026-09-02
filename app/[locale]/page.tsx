import Link from "next/link";
import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import {
  HeroFilm,
  LiveAuditScanner,
  EngineeringLayers,
  TechStackShowcase,
  InteractiveKnowledgeGraph,
} from "@/components/ClientLazies";
import { getDictionary } from "@/lib/dictionaries";
import { makeAlternates } from "@/lib/metadata";
import { faqSchema } from "@/lib/jsonld";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    alternates: makeAlternates(locale),
  };
}

/** Small helper for computing the current locale's home path. */
function localHref(locale: Locale, path: string) {
  return `/${locale}${path}`;
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.home;
  const isAr = locale === "ar";

  return (
    <div className="bg-bg text-ink">
      {/* 1. Hero (honest, method-first) */}
      <HeroFilm locale={locale} dict={dict} />

      {/* 2. The problem — "The invisible website" */}
      {t.problem && (
        <section className="border-t border-border bg-bg py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="tech-label">{t.problem.eyebrow}</div>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.problem.headline}
                </h2>
                <div className="mt-6 rounded-2xl border border-accent/30 bg-accent-soft p-6">
                  <p className="font-display text-2xl font-bold leading-tight">
                    {t.problem.stat}
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">{t.problem.statDef}</p>
                </div>
              </div>
              <ul className="space-y-5">
                {(t.problem.pains || []).map((p: string, i: number) => (
                  <li key={i} className="flex gap-4 rounded-xl card-surface p-5">
                    <span className="tech-label mt-1">0{i + 1}</span>
                    <p className="text-[15px] leading-relaxed text-ink-muted">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* 3. Proof-of-method — what's inside the free audit */}
      {t.proof && (
        <section className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <div className="tech-label">{t.proof.eyebrow}</div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t.proof.headline}
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {(t.proof.points || []).map(
                (pt: { name: string; body: string }, i: number) => (
                  <div key={i} className="card-surface p-6">
                    <div className="tech-label">{pt.name}</div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{pt.body}</p>
                  </div>
                )
              )}
            </div>
            <div className="mt-10 text-center">
              <Link
                href={localHref(locale, "/audit")}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-bold text-bg transition hover:bg-brass"
              >
                {t.proof.cta} →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. Core Engineering Stack */}
      <TechStackShowcase locale={locale} />

      {/* 5. 3-Layer Engineering Architecture */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1 font-mono text-xs font-bold text-accent">
            <span>SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            {isAr ? "الهندسة الرقمية ثلاثية الطبقات" : "The 3-Layer Performance Architecture"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-ink-muted">
            {isAr
              ? "بنية متكاملة تدمج سرعة خوادم الحافة، والتموضع في محركات الذكاء الاصطناعي، وأتمتة مسارات العمل."
              : "How we engineer web applications that load fast, get cited by AI search, and automate workflows."}
          </p>
        </div>
        <EngineeringLayers locale={locale} />
      </section>

      {/* 6. Interactive GEO Knowledge Graph */}
      <section className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <InteractiveKnowledgeGraph locale={locale} />
        </div>
      </section>

      {/* 7. Services — three cards */}
      {t.services && t.services.cards && (
        <section className="border-t border-border bg-bg py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <div className="tech-label">{t.services.eyebrow}</div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t.services.headline}
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {t.services.cards.map(
                (c: {
                  index: string;
                  title: string;
                  outcome: string;
                  deliverables: string[];
                  link: string;
                }) => (
                  <div key={c.title} className="card-surface flex flex-col p-7">
                    <div className="tech-label">{c.index}</div>
                    <h3 className="mt-3 font-display text-xl font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{c.outcome}</p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {(c.deliverables || []).map((d: string, i: number) => (
                        <li key={i} className="flex gap-2.5 text-sm text-ink-muted">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={localHref(locale, c.link || "/services")}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-brass"
                    >
                      <span>{t.services.linkLabel || "See services"}</span> →
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* 8. Process — the Index-Method */}
      {t.process && t.process.steps && (
        <section className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-12">
              <div className="tech-label">{t.process.eyebrow}</div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t.process.headline} <span className="text-accent">{t.process.name}</span>
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {(t.process.steps as { n: string; title: string; body: string }[]).map(
                (s, i) => (
                  <div key={i} className="card-surface p-6">
                    <div className="tech-label">{s.n}</div>
                    <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* 9. Trilingual advantage */}
      {t.trilingual && (
        <section className="border-t border-border bg-bg py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="tech-label">{t.trilingual.eyebrow}</div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t.trilingual.headline}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-muted">
              {t.trilingual.body}
            </p>
          </div>
        </section>
      )}

      {/* 10. Founder strip */}
      {t.founder && (
        <section className="border-t border-border bg-surface py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                <div className="tech-label">{t.founder.eyebrow}</div>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.founder.headline}
                </h2>
              </div>
              <div>
                <p className="text-[16px] leading-relaxed text-ink-muted">{t.founder.body}</p>
                <Link
                  href={localHref(locale, "/about")}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-brass"
                >
                  {t.founder.cta} →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 11. Blog picks */}
      {t.blog && t.blog.posts && (
        <section className="border-t border-border bg-bg py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-10">
              <div className="tech-label">{t.blog.eyebrow}</div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t.blog.headline}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {(t.blog.posts as { title: string; desc: string; slug: string }[]).map(
                (post, i) => (
                  <Link
                    key={i}
                    href={localHref(locale, `/blog/${post.slug}`)}
                    className="card-surface block p-7"
                  >
                    <h3 className="font-display text-xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{post.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-brass">
                      Read → <WovenDivider className="hidden" />
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* 12. FAQ */}
      {t.faq && t.faq.items && (
        <section className="border-t border-border bg-surface py-20">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                faqSchema(
                  locale,
                  (t.faq.items as { q: string; a: string }[]) || []
                )
              ),
            }}
          />
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center mb-10">
              <div className="tech-label">{t.faq.eyebrow}</div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t.faq.headline}
              </h2>
            </div>
            <div className="space-y-3">
              {(t.faq.items as { q: string; a: string }[]).map((f, i) => (
                <details key={i} className="card-surface p-5">
                  <summary className="flex items-center justify-between gap-4 text-[15px] font-semibold text-ink">
                    {f.q}
                    <span className="font-mono text-accent">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 13. Final CTA */}
      <section className="relative border-t border-border bg-bg py-28 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[350px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-4xl px-6">
          <div className="tech-label">{t.finalEyebrow || "Next step"}</div>
          <h2 className="mt-6 font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink">
            {t.finalHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-ink-muted">
            {t.finalSub}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaButton href={`/${locale}/audit`}>{t.finalCta}</CtaButton>
            <Link
              href={`/${locale}/process`}
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface-hover px-8 py-3.5 text-sm font-semibold text-ink backdrop-blur-md transition hover:bg-surface-raised"
            >
              {isAr ? "استكشف منهجية العمل" : "See the method"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
