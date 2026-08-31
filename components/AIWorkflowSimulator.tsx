"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";

interface NodeStep {
  id: string;
  title: string;
  sub: string;
  tag: string;
  status: "idle" | "active" | "complete";
  metric: string;
}

export default function AIWorkflowSimulator({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [activeStep, setActiveStep] = useState(0);

  const steps: NodeStep[] = isAr
    ? [
        {
          id: "01",
          title: "التقاط النية و GEO",
          sub: "استعلامات ChatGPT & Perplexity",
          tag: "Vector Search",
          status: activeStep === 0 ? "active" : activeStep > 0 ? "complete" : "idle",
          metric: "42ms Latency",
        },
        {
          id: "02",
          title: "محرك Next.js فائق السرعة",
          sub: "عرض على الحافة + استخراج البيانات",
          tag: "Turbopack Edge",
          status: activeStep === 1 ? "active" : activeStep > 1 ? "complete" : "idle",
          metric: "100/100 CWV",
        },
        {
          id: "03",
          title: "أوركسترا n8n والوكلاء",
          sub: "تصنيف العملاء والمكالمات الآلية",
          tag: "Autonomous Agent",
          status: activeStep === 2 ? "active" : activeStep > 2 ? "complete" : "idle",
          metric: "Zero-Human Loop",
        },
        {
          id: "04",
          title: "المزامنة مع CRM والإغلاق",
          sub: "إرسال العقد وجدولة موعد مباشر",
          tag: "HubSpot / Stripe",
          status: activeStep === 3 ? "active" : activeStep > 3 ? "complete" : "idle",
          metric: "+340% Conversion",
        },
      ]
    : [
        {
          id: "01",
          title: "GEO Intent Capture",
          sub: "Perplexity & ChatGPT Search Query",
          tag: "Vector Search",
          status: activeStep === 0 ? "active" : activeStep > 0 ? "complete" : "idle",
          metric: "42ms Latency",
        },
        {
          id: "02",
          title: "Next.js Edge Engine",
          sub: "Sub-second SSR & Schema Graph Injection",
          tag: "Turbopack Edge",
          status: activeStep === 1 ? "active" : activeStep > 1 ? "complete" : "idle",
          metric: "100/100 CWV",
        },
        {
          id: "03",
          title: "n8n Agentic Orchestrator",
          sub: "Lead Enrichment & Tool-Calling Pipeline",
          tag: "Autonomous Agent",
          status: activeStep === 2 ? "active" : activeStep > 2 ? "complete" : "idle",
          metric: "Zero-Human Loop",
        },
        {
          id: "04",
          title: "Enterprise CRM Sync",
          sub: "Automated Proposal & Calendar Dispatch",
          tag: "HubSpot / Stripe",
          status: activeStep === 3 ? "active" : activeStep > 3 ? "complete" : "idle",
          metric: "+340% Conversion",
        },
      ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070b12] p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />

      {/* Terminal Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-xs font-semibold text-slate-400">
            seonid://engine/autonomous-pipeline.spec
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
          </span>
          <span className="font-mono text-xs font-bold text-cyan-400">
            {isAr ? "نظام التشغيل مباشر" : "LIVE AGENTIC RUNTIME"}
          </span>
        </div>
      </div>

      {/* Workflow Step Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          const isComplete = activeStep > idx;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-500 ${
                isActive
                  ? "border-cyan-400 bg-cyan-950/20 shadow-[0_0_30px_rgba(0,240,255,0.15)] ring-1 ring-cyan-400/50"
                  : isComplete
                  ? "border-emerald-500/40 bg-emerald-950/10"
                  : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between text-xs">
                <span
                  className={`font-mono font-bold ${
                    isActive ? "text-cyan-400" : isComplete ? "text-emerald-400" : "text-slate-500"
                  }`}
                >
                  NODE {step.id}
                </span>
                <span
                  className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold ${
                    isActive
                      ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/30"
                      : "bg-white/5 text-slate-400"
                  }`}
                >
                  {step.tag}
                </span>
              </div>

              {/* Title & Body */}
              <h4 className="mt-4 font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{step.sub}</p>

              {/* Metric Indicator */}
              <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3 text-[11px]">
                <span className="text-slate-500">{isAr ? "الكفاءة" : "Benchmark"}</span>
                <span
                  className={`font-mono font-bold ${
                    isActive ? "text-cyan-400" : "text-slate-300"
                  }`}
                >
                  {step.metric}
                </span>
              </div>

              {/* Active Running Pulse Indicator */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      {/* Terminal Live Output Console */}
      <div className="mt-6 rounded-xl border border-white/5 bg-black/60 p-4 font-mono text-xs">
        <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-white/5">
          <span>EVENT LOG</span>
          <span>TIMESTAMP: {new Date().toISOString().substring(11, 19)} UTC</span>
        </div>
        <div className="mt-3 space-y-1.5 text-slate-300">
          <p className="flex items-center gap-2">
            <span className="text-cyan-400">➜</span>
            <span className="text-emerald-400">[200 OK]</span>
            <span>Query parsed via Perplexity AI API · Keyword cluster mapped.</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-cyan-400">➜</span>
            <span className="text-purple-400">[n8n Webhook]</span>
            <span>Executing automated routing payload to CRM · 0 human friction.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
