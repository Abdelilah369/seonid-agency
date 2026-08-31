"use client";

import type { Locale } from "@/lib/i18n";

export default function TechStackShowcase({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";

  const stack = [
    { name: "Next.js 15", desc: "React SSR / Turbopack", tag: "Frontend Architecture" },
    { name: "n8n Workflows", desc: "Agentic Multi-Node ETL", tag: "AI Orchestration" },
    { name: "OpenAI & Claude", desc: "Structured Tool-Calling LLMs", tag: "Model Inference" },
    { name: "Perplexity AI", desc: "GEO Semantic Indexing", tag: "Generative Search" },
    { name: "Supabase & Postgres", desc: "pgvector & Realtime State", tag: "Vector Database" },
    { name: "Vercel Edge", desc: "Global Edge Network (<50ms)", tag: "Edge Infrastructure" },
  ];

  return (
    <section className="border-y border-white/5 bg-[#0a0d12] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
            {isAr ? "البنية التقنية المعتمدة" : "Core Production Engineering Stack"}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stack.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center transition-all hover:border-[#d4973b]/40 hover:bg-white/[0.04]"
            >
              <div>
                <span className="font-mono text-[10px] text-[#d4973b] font-semibold uppercase">
                  {item.tag}
                </span>
                <p className="mt-1.5 font-display text-sm font-bold text-white">
                  {item.name}
                </p>
              </div>
              <p className="mt-2 text-[11px] text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
