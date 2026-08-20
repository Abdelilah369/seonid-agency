import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return { title: dict.blog.meta.title, description: dict.blog.meta.description };
}

export default async function BlogPage({
  params,
}: PageProps<"/[locale]/blog">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.blog;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
        {t.eyebrow}
      </p>
      <h1 className="mt-5 max-w-[20ch] text-balance font-display text-[34px] font-semibold leading-[1.1] tracking-tight sm:text-[40px]">
        {t.headline}
      </h1>
      <WovenDivider className="mt-6 max-w-[140px]" />
      <p className="mt-6 max-w-[54ch] text-[15.5px] leading-relaxed text-ink-muted">
        {t.bodyPre}{" "}
        <a href={`/${locale}/process`} className="underline decoration-border decoration-2 underline-offset-4 hover:decoration-accent">
          {t.bodyLink}
        </a>{" "}
        {t.bodyPost}
      </p>
      <div className="mt-9">
        <CtaButton href={`/${locale}/audit`} variant="outline">
          {t.cta}
        </CtaButton>
      </div>
    </section>
  );
}
