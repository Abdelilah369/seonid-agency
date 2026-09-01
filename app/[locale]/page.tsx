import Link from "next/link";
import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import HeroFilm from "@/components/HeroFilm";
import LiveAuditScanner from "@/components/LiveAuditScanner";
import EngineeringLayers from "@/components/EngineeringLayers";
import TechStackShowcase from "@/components/TechStackShowcase";
import InteractiveKnowledgeGraph from "@/components/InteractiveKnowledgeGraph";
import CaseStudiesTeardown from "@/components/CaseStudiesTeardown";
import UnifiedBenchmarkSuite from "@/components/UnifiedBenchmarkSuite";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import { getDictionary } from "@/lib/dictionaries";
import { makeAlternates } from "@/lib/metadata";
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

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDictionary(locale);
  const t = dict.home;
  const isAr = locale === "ar";

  return (
    <div className="bg-[#080a0d] text-[#f5f3ec]">
      {/* 1. Architectural Hero */}
      <HeroFilm locale={locale} dict={dict} />

      {/* 2. Core Engineering Stack */}
      <TechStackShowcase locale={locale} />

      {/* 3. 3-Layer Engineering Architecture */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
            <span>SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {isAr ? "الهندسة الرقمية ثلاثية الطبقات" : "The 3-Layer Performance Architecture"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            {isAr
              ? "بنية متكاملة تدمج سرعة خوادم الحافة، والتموضع في محركات الذكاء الاصطناعي، وأتمتة مسارات العمل."
              : "How we engineer web applications that eliminate latency, get cited by AI search models, and automate operational workflows."}
          </p>
        </div>

        <EngineeringLayers locale={locale} />
      </section>

      {/* 4. Interactive GEO Knowledge Graph Visualizer */}
      <section className="border-t border-white/10 bg-[#0a0d12] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <InteractiveKnowledgeGraph locale={locale} />
        </div>
      </section>

      {/* 5. Real Client Case Studies & Teardowns */}
      <section className="border-t border-white/10 bg-[#080a0d] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <CaseStudiesTeardown locale={locale} />
        </div>
      </section>

      {/* 6. Unified Forensic Benchmark Suite */}
      <section className="border-t border-white/10 bg-[#0a0d12] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <UnifiedBenchmarkSuite locale={locale} />
        </div>
      </section>

      {/* 7. Live Interactive Audit Scanner */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
            <span>FORENSIC DIAGNOSTIC TOOL</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {isAr ? "فحص فوري لأداء موقعك وبنيته التقنية" : "Inspect Your Architecture Live"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400">
            {isAr
              ? "تحليل فوري يكشف سرعة الاستجابة، جاهزية الذكاء الاصطناعي، والأخطاء البرمجية الخفية."
              : "Simulate a live forensic audit across Core Web Vitals, Schema validation, and LLM search discoverability."}
          </p>
        </div>

        <LiveAuditScanner locale={locale} />
      </section>

      {/* 8. Interactive CLI Terminal & Founder Manifesto */}
      <section className="border-t border-white/10 bg-[#0a0d12] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: Founder Philosophy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3.5 py-1 font-mono text-xs font-bold text-[#d4973b]">
                <span>ARCHITECTURAL MANIFESTO</span>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {isAr
                  ? "مهندس ذكاء اصطناعي واحد. صفر طبقات وسطاء."
                  : "One Solutions Architect. Direct Engineering. Zero Friction."}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-300">
                {isAr
                  ? "تدار SEONID بواسطة عبد الإله الكرومي، مهندس برمجيات وخبير استراتيجي في الذكاء الاصطناعي. بينما توظف الوكالات الكبيرة مديري حسابات يتناقلون رسائلك عبر البريد الإلكتروني، هنا أنت تتحدث وتعمل مباشرة مع المهندس الذي يبني كودك ومسارات أتمتتك."
                  : "SEONID is operated by Abdelilah Karroumi, a software engineer and solutions architect. Large agencies drown you in junior account managers and outsourced queues. Here, you work directly with the technical mind coding your edge architecture, mapping your GEO graphs, and building your n8n pipelines."}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {isAr
                  ? "نموذجنا يعتمد على عدد عملاء محدود كل ربع سنة، مع تركيز هندسي كامل وتسليمات سريعة خلال 14 يوماً."
                  : "We accept a strict maximum of client partners per quarter, delivering sub-second edge architectures with zero agency bloat."}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/about`}
                  className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  {isAr ? "اقرأ بيان التأسيس" : "Read the Founder Manifesto"} →
                </Link>
              </div>
            </div>

            {/* Right: Functional Interactive Terminal */}
            <div>
              <InteractiveTerminal locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* 9. High-Converting Unified Final CTA */}
      <section className="relative border-t border-white/10 bg-[#080a0d] py-28 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[350px] w-[500px] rounded-full bg-[#d4973b]/10 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-4xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-4 py-1 font-mono text-xs font-bold text-[#d4973b]">
            <span>CONFIDENTIAL 48-HOUR DELIVERABLE</span>
          </div>
          <h2 className="mt-6 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            {t.finalHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300">
            {t.finalSub}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaButton href={`/${locale}/audit`}>
              {t.finalCta}
            </CtaButton>
            <Link
              href={`/${locale}/process`}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              {isAr ? "استكشف منهجية العمل" : "View 4-Phase Sprint Model"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
