import type { Metadata } from "next";
import WovenDivider from "@/components/WovenDivider";
import CtaButton from "@/components/CtaButton";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return { title: dict.contact.meta.title, description: dict.contact.meta.description };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.contact;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep">
        {t.eyebrow}
      </p>
      <h1 className="mt-5 max-w-[18ch] text-balance font-display text-[34px] font-semibold leading-[1.1] tracking-tight sm:text-[40px]">
        {t.headline}
      </h1>
      <WovenDivider className="mt-6 max-w-[140px]" />

      <div className="mt-10 max-w-[52ch] space-y-5 text-[15.5px] leading-relaxed text-ink-muted">
        <p>{t.p1}</p>
        <p>
          {t.p2Pre}{" "}
          <a
            href="mailto:hello@seonid.agency"
            dir="ltr"
            className="font-semibold text-ink underline decoration-border decoration-2 underline-offset-4 hover:decoration-accent"
          >
            hello@seonid.agency
          </a>
        </p>
        <p className="text-[14px] text-ink-faint">{t.location}</p>
      </div>

      <div className="mt-9">
        <CtaButton href={`/${locale}/audit`}>{t.cta}</CtaButton>
      </div>
    </section>
  );
}
