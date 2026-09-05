import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import WovenDivider from "@/components/WovenDivider";
import PageSchema from "@/components/PageSchema";
import { getDictionary } from "@/lib/dictionaries";
import { makeAlternates } from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

const PRODUCT_ENV_IDS = [
  process.env.NEXT_PUBLIC_POLAR_PRODUCT_STARTER,
  process.env.NEXT_PUBLIC_POLAR_PRODUCT_PLAYBOOK,
];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/shop">): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  return {
    title: dict.shop.meta.title,
    description: dict.shop.meta.description,
    alternates: makeAlternates(locale, "/shop"),
  };
}

export default async function ShopPage({
  params,
}: PageProps<"/[locale]/shop">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.shop;

  return (
    <div className="bg-bg text-ink">
      <PageSchema
        locale={locale}
        relPath="/shop"
        title={t.meta.title}
        breadcrumb={[{ name: t.eyebrow, relPath: "/shop" }]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-96 w-96 rounded-full bg-[#d4973b]/10 blur-[140px]" />
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
          <span>{t.eyebrow}</span>
        </div>
        <h1 className="mt-5 max-w-[22ch] text-balance font-display text-[38px] font-bold leading-[1.1] tracking-tight sm:text-[52px] text-white">
          {t.headline}
        </h1>
        <WovenDivider className="mt-6 max-w-[160px]" />
        <p className="mt-7 max-w-[58ch] text-[17px] leading-relaxed text-slate-300">
          {t.intro}
        </p>
      </section>

      {/* Products */}
      <section className="border-t border-white/5 bg-[#0a0d12] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {t.products.map((product, i) => {
              const productId = PRODUCT_ENV_IDS[i];
              const checkoutHref = productId
                ? `/checkout?products=${productId}`
                : undefined;
              return (
                <div
                  key={product.name}
                  className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0e1218] p-8 sm:p-10 shadow-2xl transition-all hover:border-[#d4973b]/40 hover:bg-[#121720]"
                >
                  <div className="border-b border-white/10 pb-6">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#d4973b]">
                      {product.tagline}
                    </span>
                    <h2 className="mt-1 font-display text-[24px] font-bold text-white">
                      {product.name}
                    </h2>
                    <p className="mt-1 font-mono text-lg font-bold text-[#d4973b]">
                      {product.price}
                    </p>
                  </div>

                  <p className="mt-6 text-[15px] leading-relaxed text-slate-300">
                    {product.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-[14px] leading-relaxed text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#d4973b]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    {checkoutHref ? (
                      <CtaButton href={checkoutHref}>{product.buyLabel}</CtaButton>
                    ) : (
                      <span className="text-sm text-slate-500">
                        {product.buyLabel} — coming soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <h3 className="font-display text-lg font-bold text-white">
              {t.noteHeadline}
            </h3>
            <p className="mx-auto mt-2 max-w-[52ch] text-sm text-slate-400">
              {t.note}
            </p>
            <div className="mt-6 flex justify-center">
              <CtaButton href={`/${locale}/contact`} variant="outline">
                {t.noteCta}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
