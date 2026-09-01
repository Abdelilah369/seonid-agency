"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export default function EngineeringLayers({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = isAr
    ? [
        {
          num: "01",
          name: "طبقة الحافة والأداء (Edge & Rendering)",
          tag: "Next.js 15 Turbopack",
          video: "/videos/hero_glass_pavilion_web.mp4",
          videoLabel: "مشهد 01 · بنية خوادم الحافة وسرعة الاستجابة",
          headline: "سرعة تحميل دون الثانية وضمان 100/100 Core Web Vitals",
          desc: "نقوم ببرمجة بنى رقمية نظيفة خالية من حشو القوالب الجاهزة. عرض من خوادم الحافة العالمية بزمن استجابة <45ms لضمان أعلى معدل تحويل وتجربة تصفح فورية.",
          specs: [
            { label: "زمن استجابة الخادم (TTFB)", val: "<120ms" },
            { label: "أكبر رسم محتوى (LCP)", val: "0.65s" },
            { label: "تحول التخطيط التراكمي (CLS)", val: "0.00" },
            { label: "ضغط الحافة", val: "Brotli Edge" },
          ],
        },
        {
          num: "02",
          name: "طبقة الرسم الدلالي ومحركات الـ AI (GEO Graph)",
          tag: "Schema & Vector Search",
          video: "/videos/drone_modern_studio_web.mp4",
          videoLabel: "مشهد 02 · استوديو الهندسة المعمارية والترسيخ الفيزيائي",
          headline: "تحويل المحتوى إلى بيانات مهيكلة تستشهد بها محركات ChatGPT و Perplexity",
          desc: "لم يعد تصدر Google كافياً إذا كانت نماذج الذكاء الاصطناعي لا تستشهد بك. نربط موقعك بـ JSON-LD Entity Graph متقدم يجعل نشاطك المرجع الأول عند الإجابة.",
          specs: [
            { label: "نسبة صحة البيانات المهيكلة", val: "100% Valid" },
            { label: "محركات البحث المدعومة", val: "ChatGPT, Perplexity, Claude" },
            { label: "مخططات الكيانات", val: "Article, Org, FAQ, Service" },
            { label: "جاهزية الفهرسة", val: "Sub-Minute" },
          ],
        },
        {
          num: "03",
          name: "طبقة الأتمتة والعمليات (Autonomous Pipelines)",
          tag: "n8n & Multi-Agent ETL",
          video: "/videos/light_weaving_matrix_web.mp4",
          videoLabel: "مشهد 03 · مسار الأتمتة العصبية وتدفق البيانات الفوري",
          headline: "أتمتة العمليات اليومية ومزامنة الـ CRM دون تدخل بشري",
          desc: "بناء مسارات عمل ذاتية التشغيل تربط التقاط العملاء من الموقع مباشرة بـ CRM (HubSpot/Notion) وإرسال العروض والمقترحات آلياً وفورياً.",
          specs: [
            { label: "محرك الأوركسترا", val: "n8n Dedicated" },
            { label: "سرعة مزامنة الصفقات", val: "Real-time Webhooks" },
            { label: "نسبة توفير وقت الفريق", val: "15+ ساعة أسبوعياً" },
            { label: "تكامل الـ API", val: "Stripe, HubSpot, Slack" },
          ],
        },
      ]
    : [
        {
          num: "01",
          name: "Edge & Performance Layer",
          tag: "Next.js 15 Turbopack",
          video: "/videos/hero_glass_pavilion_web.mp4",
          videoLabel: "Scene 01 · Global Edge Architecture & Latency Control",
          headline: "Sub-second load times and 100/100 Core Web Vitals guaranteed",
          desc: "Custom headless architectures without bloated WordPress plugins. Global edge rendering with <45ms server response time ensures maximum conversion rates and instant page transitions.",
          specs: [
            { label: "Time to First Byte (TTFB)", val: "<120ms" },
            { label: "Largest Contentful Paint (LCP)", val: "0.65s" },
            { label: "Cumulative Layout Shift (CLS)", val: "0.00" },
            { label: "Compression", val: "Brotli Global Edge" },
          ],
        },
        {
          num: "02",
          name: "Semantic Graph & GEO Layer",
          tag: "Schema & Vector Search",
          video: "/videos/drone_modern_studio_web.mp4",
          videoLabel: "Scene 02 · Physical Studio Grounding & Architecture",
          headline: "Structured entity graphs engineered for ChatGPT & Perplexity citations",
          desc: "Ranking #1 on Google is no longer enough if AI search overviews overlook your brand. We build deep JSON-LD entity graphs that position your platform as the primary ground truth source for LLMs.",
          specs: [
            { label: "Schema Graph Validity", val: "100% Strict" },
            { label: "Target Engines", val: "ChatGPT Search, Perplexity, Claude" },
            { label: "Entity Schemas", val: "Org, Service, FAQ, KnowledgeGraph" },
            { label: "Crawl Hygiene", val: "Clean Headless Tree" },
          ],
        },
        {
          num: "03",
          name: "Autonomous Pipeline Layer",
          tag: "n8n & Multi-Agent ETL",
          video: "/videos/light_weaving_matrix_web.mp4",
          videoLabel: "Scene 03 · Autonomous Neural Weave & Multi-Agent Pipelines",
          headline: "End-to-end workflow automation and zero-human-lag CRM dispatch",
          desc: "Production-grade n8n orchestrations that connect customer inquiries directly to CRM enrichment, automated proposal generation, and live notification channels without manual data entry.",
          specs: [
            { label: "Orchestration Engine", val: "Self-Hosted n8n" },
            { label: "Lead Event Latency", val: "Instant Webhooks" },
            { label: "Operational Leverage", val: "15+ hrs/week saved" },
            { label: "Ecosystem Sync", val: "HubSpot, Stripe, Slack, Notion" },
          ],
        },
      ];

  const current = layers[activeLayer];

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0c0f14] shadow-2xl">
      {/* Top Architecture Tabs */}
      <div className="grid border-b border-white/10 sm:grid-cols-3">
        {layers.map((l, idx) => {
          const isActive = activeLayer === idx;
          return (
            <button
              key={l.num}
              onClick={() => setActiveLayer(idx)}
              className={`flex items-center gap-3 p-6 text-left transition-all ${
                isActive
                  ? "bg-white/[0.04] border-b-2 border-[#d4973b]"
                  : "bg-transparent hover:bg-white/[0.02] opacity-70 hover:opacity-100"
              }`}
            >
              <span
                className={`font-mono text-sm font-bold ${
                  isActive ? "text-[#d4973b]" : "text-slate-500"
                }`}
              >
                {l.num}
              </span>
              <div>
                <p className="font-display text-sm font-bold text-white">{l.name}</p>
                <p className="font-mono text-[11px] text-slate-400">{l.tag}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Layer Body with Side-by-Side Content & Video Showcase */}
      <div className="p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left: Layer Specs & Details */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4973b]/30 bg-[#d4973b]/10 px-3 py-1 font-mono text-[11px] font-semibold text-[#d4973b]">
              <span>LAYER {current.num} ARCHITECTURE</span>
            </div>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              {current.headline}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {current.desc}
            </p>

            {/* Technical Specs Board */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {current.specs.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-[#d4973b]/30"
                >
                  <p className="font-mono text-[11px] text-slate-400 uppercase">{s.label}</p>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    {s.val}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dedicated Veo 3 Video Scene Player for this Layer */}
          <div className="relative overflow-hidden rounded-2xl border border-[#d4973b]/30 bg-black shadow-2xl">
            <video
              key={current.video}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/images/hero-luxury.jpg"
              className="aspect-[16/10] w-full object-cover"
            >
              <source src={current.video} type="video/mp4" />
            </video>

            {/* HUD Status Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[11px] text-white">
              <span className="rounded-full bg-[#d4973b] px-2.5 py-0.5 text-[#080a0d] font-bold">
                SCENE 0{activeLayer + 1}
              </span>
              <span className="rounded-full bg-black/70 px-2.5 py-0.5 text-slate-300 border border-white/10 backdrop-blur-md">
                Veo 3 · 60fps
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
              <span className="font-mono text-[11px] text-[#f5f3ec]">{current.videoLabel}</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
