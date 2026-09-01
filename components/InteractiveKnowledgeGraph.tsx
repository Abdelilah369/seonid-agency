"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

interface Node {
  id: string;
  label: string;
  type: "root" | "engine" | "schema" | "metric";
  x: number;
  y: number;
  description: string;
  detail: string;
}

export default function InteractiveKnowledgeGraph({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [selectedNode, setSelectedNode] = useState<string>("root");

  const nodes: Node[] = [
    {
      id: "root",
      label: isAr ? "كيان علامتك التجارية" : "Brand Entity Core",
      type: "root",
      x: 50,
      y: 50,
      description: isAr
        ? "المرجع الدلالي الموحد لنشاطك التجاري المعرف في شبكة الويب الدلالي."
        : "The primary authoritative entity recognized by search knowledge vaults.",
      detail: "JSON-LD @id: 'https://seonid.agency/#organization' with complete Schema.org taxonomy.",
    },
    {
      id: "chatgpt",
      label: "ChatGPT Search (OpenAI)",
      type: "engine",
      x: 20,
      y: 20,
      description: isAr
        ? "خوارزمية استخراج الحقائق والروابط المباشرة داخل إجابات ChatGPT."
        : "Extracts grounded citations directly from verified schema-nested entity trees.",
      detail: "Indexed via Bing IndexNow + Real-time retrieval augmented scraping (OAI-SearchBot).",
    },
    {
      id: "perplexity",
      label: "Perplexity AI Index",
      type: "engine",
      x: 80,
      y: 20,
      description: isAr
        ? "محرك الإجابات التوليدي الذي يعتمد على الكيانات ذات الموثوقية التقنية العالية."
        : "Prioritizes structured authoritative nodes with fast TTFB (<200ms) for live citations.",
      detail: "Deep citation clustering through high-density semantic anchor matching.",
    },
    {
      id: "claude",
      label: "Claude / Anthropic Search",
      type: "engine",
      x: 80,
      y: 80,
      description: isAr
        ? "نماذج الاستدلال المعقدة التي تقرأ البيانات المنظمة بدون تشويش إعلاني."
        : "Analyzes high-context knowledge trees without navigational noise or bloated DOMs.",
      detail: "Clean semantic markup without JavaScript hydration hurdles.",
    },
    {
      id: "google",
      label: "Google AI Overviews",
      type: "engine",
      x: 20,
      y: 80,
      description: isAr
        ? "ملخصات الذكاء الاصطناعي في أعلى نتائج بحث Google."
        : "Targeted for Google AI Overviews and featured-snippet visibility.",
      detail: "JSON-LD entity graph: Organization, Service, FAQ, BreadcrumbList, Article — validated in Google Rich Results Test before launch.",
    },
    {
      id: "schema",
      label: "Semantic Entity Graph",
      type: "schema",
      x: 50,
      y: 15,
      description: isAr
        ? "هياكل البيانات المتداخلة (Organization, Service, FAQ, Person, Article)."
        : "Interconnected multi-type Schema taxonomy creating an unbreakable web of trust.",
      detail: "Structured with exact sameAs Wikipedia, Wikidata, and verified social entity nodes.",
    },
    {
      id: "edge",
      label: "Edge Performance Cache",
      type: "metric",
      x: 50,
      y: 85,
      description: isAr
        ? "استجابة خادم فورية (<45ms) تضمن زحفاً خالياً من أخطاء المهلة لجميع الروبوتات."
        : "Global edge CDN distribution preventing crawl budget timeouts from LLM scrapers.",
      detail: "Next.js 15 Edge SSR + Brotli compression delivering <45ms server TTFB globally.",
    },
  ];

  const active = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0d12] p-6 sm:p-10 shadow-2xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3 py-1 font-mono text-xs font-bold text-[#d4973b]">
            <span className="h-2 w-2 rounded-full bg-[#d4973b] animate-ping" />
            <span>INTERACTIVE GEO KNOWLEDGE GRAPH</span>
          </div>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
            {isAr ? "رسم بياني تفاعلي: كيف تستشهد بك محركات الذكاء الاصطناعي؟" : "Visualizing LLM Citation Vectors & Entity Graphs"}
          </h3>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            {isAr
              ? "انقر على أي عقدة لاستكشاف كيف نربط بيانات موقعك المادية بشبكات الفهم لدى محركات الذكاء الاصطناعي."
              : "Click any node to inspect how SEONID anchors your brand as ground-truth evidence across AI search algorithms."}
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-black/40 px-4 py-2 rounded-full border border-white/5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>ENTITY GRAPH · 7 NODES</span>
        </div>
      </div>

      {/* Mobile Node Selector Pills */}
      <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
        {nodes.map((n) => (
          <button
            key={n.id}
            onClick={() => setSelectedNode(n.id)}
            className={`rounded-full px-3 py-1 font-mono text-[11px] font-semibold transition ${
              selectedNode === n.id
                ? "bg-[#d4973b] text-[#080a0d]"
                : "border border-white/10 bg-white/5 text-slate-400"
            }`}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        {/* Interactive Spatial Graph Canvas */}
        <div className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 bg-[#06080b] p-4 overflow-hidden">
          {/* Subtle Ambient Video Background from Veo 3 */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/hero-luxury_web.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen pointer-events-none"
          >
            <source src="/videos/light_weaving_matrix_web.mp4" type="video/mp4" />
          </video>

          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
          
          {/* Radial Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#d4973b]/15 blur-[90px] pointer-events-none" />

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {nodes
              .filter((n) => n.id !== "root")
              .map((n) => (
                <line
                  key={n.id}
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke={selectedNode === n.id ? "#d4973b" : "rgba(255, 255, 255, 0.12)"}
                  strokeWidth={selectedNode === n.id ? "0.8" : "0.3"}
                  strokeDasharray={selectedNode === n.id ? "none" : "1,1"}
                  className="transition-all duration-300"
                />
              ))}
          </svg>

          {/* Interactive Nodes */}
          {nodes.map((node) => {
            const isSelected = selectedNode === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                style={{
                  top: `${node.y}%`,
                  left: `${node.x}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className={`absolute z-10 flex flex-col items-center gap-1.5 transition-all duration-300 group focus:outline-none ${
                  isSelected ? "scale-110" : "hover:scale-105 opacity-80 hover:opacity-100"
                }`}
              >
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border font-mono text-xs font-bold transition-all shadow-xl ${
                    node.type === "root"
                      ? "bg-[#d4973b] text-[#080a0d] border-[#e5ad58] shadow-[#d4973b]/30 ring-4 ring-[#d4973b]/20"
                      : isSelected
                      ? "bg-[#161c26] text-[#d4973b] border-[#d4973b] shadow-lg shadow-[#d4973b]/20 ring-2 ring-[#d4973b]/40"
                      : "bg-[#0f131a] text-slate-300 border-white/10 hover:border-white/30"
                  }`}
                >
                  {node.type === "root" ? "✦" : node.type === "schema" ? "{ }" : node.type === "metric" ? "⚡" : "AI"}
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold whitespace-nowrap backdrop-blur-md border ${
                    isSelected
                      ? "bg-[#d4973b]/20 border-[#d4973b]/60 text-[#d4973b]"
                      : "bg-black/60 border-white/10 text-slate-400 group-hover:text-white"
                  }`}
                >
                  {node.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Node Telemetry Inspector */}
        <div className="rounded-2xl border border-white/10 bg-[#0e1218] p-6 sm:p-8 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-[#d4973b] font-bold">NODE TELEMETRY INSPECTOR</span>
            <span className="text-slate-500 font-semibold uppercase">{active.type}</span>
          </div>

          <div className="mt-6 space-y-4 font-body">
            <div>
              <p className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">Node Name</p>
              <p className="font-display text-xl font-bold text-white mt-1">{active.label}</p>
            </div>

            <div>
              <p className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">Semantic Function</p>
              <p className="text-sm leading-relaxed text-slate-300 mt-1">{active.description}</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-4 font-mono text-[11px] text-slate-400">
              <p className="text-slate-500 font-semibold mb-1">// Implementation Spec</p>
              <p className="text-[#f5f3ec] leading-relaxed">{active.detail}</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Graph · 7 connected entities</span>
            <span>Schema: Org · Service · FAQ · Breadcrumb</span>
          </div>
        </div>
      </div>
    </div>
  );
}
