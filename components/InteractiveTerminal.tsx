"use client";

import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/lib/i18n";

interface TerminalLog {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLog[]>([
    {
      command: "init seonid-engine --v=2.4.0",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-[#d4973b] font-bold">SEONID CLI [v2.4.0] — Principal Solutions Architecture Terminal</p>
          <p className="text-slate-400">Type <span className="text-white font-bold">&apos;help&apos;</span> to inspect available architectural diagnostics and commands.</p>
        </div>
      ),
    },
  ]);

  const logContainerRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    if (cmd === "help") {
      output = (
        <div className="space-y-1 text-slate-300">
          <p className="text-[#d4973b] font-bold">Available Commands:</p>
          <p><span className="text-white font-semibold">audit &lt;url&gt;</span> : Launch a live pre-check on any target domain</p>
          <p><span className="text-white font-semibold">stack</span> : View the high-performance Next.js 15 + n8n architecture</p>
          <p><span className="text-white font-semibold">pricing</span> : View 14-day sprint models and monthly retainer tiers</p>
          <p><span className="text-white font-semibold">manifesto</span> : Read Abdelilah Karroumi&apos;s architectural philosophy</p>
          <p><span className="text-white font-semibold">contact</span> : Get direct communication channels</p>
          <p><span className="text-white font-semibold">clear</span> : Clear console window</p>
        </div>
      );
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (cmd.startsWith("audit")) {
      const parts = cmd.split(" ");
      const target = parts[1] || "your-site.com";
      output = (
        <div className="space-y-1 text-slate-300">
          <p className="text-[#d4973b]">Scanning target: {target}...</p>
          <p>✓ Response Latency: <span className="text-emerald-400 font-bold">&lt;110ms</span></p>
          <p>✓ JSON-LD Schema: <span className="text-emerald-400 font-bold">Valid Hierarchy</span></p>
          <p>✓ AI Citations (ChatGPT/Perplexity): <span className="text-[#d4973b] font-bold">Ready</span></p>
          <p className="text-slate-400 mt-2">→ Want to upgrade your system? Click &apos;Start a project&apos; above or in the menu.</p>
        </div>
      );
    } else if (cmd === "stack") {
      output = (
        <div className="space-y-1 text-slate-300">
          <p className="text-[#d4973b] font-bold">SEONID Production Engineering Stack:</p>
          <p>• <span className="text-white">Frontend:</span> Next.js 15 App Router, React 19, Turbopack, Tailwind CSS</p>
          <p>• <span className="text-white">Deployment:</span> Vercel Global Edge Network with sub-45ms routing</p>
          <p>• <span className="text-white">Search/GEO:</span> JSON-LD Knowledge Graphs, IndexNow API, Semantic Vectors</p>
          <p>• <span className="text-white">Automation:</span> Dedicated n8n Multi-Agent ETL &amp; Webhook Orchestrations</p>
        </div>
      );
    } else if (cmd === "pricing") {
      output = (
        <div className="space-y-1 text-slate-300">
          <p className="text-[#d4973b] font-bold">Engagement Formats:</p>
          <p>1. <span className="text-white font-semibold">14-Day Sprint Build:</span> Complete headless rewrite with 100/100 Core Web Vitals guarantee.</p>
          <p>2. <span className="text-white font-semibold">Growth &amp; Automation Retainer:</span> Ongoing GEO optimization, n8n automations, and direct solutions architect access.</p>
        </div>
      );
    } else if (cmd === "manifesto") {
      output = (
        <div className="space-y-1 text-slate-300">
          <p className="text-[#d4973b] font-bold">Architectural Manifesto by Abdelilah Karroumi:</p>
          <p>&quot;We reject the legacy agency playbook: bloated WordPress templates, junior account managers, and endless vanity meetings. We operate with strict client caps, delivering sub-second edge architectures with direct founder accountability.&quot;</p>
        </div>
      );
    } else if (cmd === "contact") {
      output = (
        <div className="space-y-1 text-slate-300">
          <p className="text-[#d4973b] font-bold">Direct Channels:</p>
          <p>Email: <a href="mailto:hello@seonid.agency" className="text-white underline">hello@seonid.agency</a></p>
          <p>Location: Casablanca &amp; Rabat, Morocco (Serving Global Clients)</p>
          <p>SLA: Guaranteed written response within 24 hours.</p>
        </div>
      );
    } else {
      output = (
        <p className="text-red-400">
          Command not recognized: &apos;{cmd}&apos;. Type <span className="text-white font-bold">&apos;help&apos;</span> for available commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
    setTimeout(() => {
      if (logContainerRef.current) {
        logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
      }
    }, 50);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#06080b] p-6 sm:p-8 font-mono text-xs shadow-2xl">
      {/* Terminal Window Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">seonid@edge-terminal:~$</span>
        </div>
        <span className="text-[11px] font-bold text-[#d4973b]">INTERACTIVE CONSOLE</span>
      </div>

      {/* Terminal Output Log */}
      <div ref={logContainerRef} className="mt-6 max-h-80 overflow-y-auto space-y-4 pr-2">
        {history.map((h, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center gap-2 text-[#d4973b]">
              <span>❯</span>
              <span className="text-white">{h.command}</span>
            </div>
            <div className="ps-4 text-slate-300">{h.output}</div>
          </div>
        ))}
      </div>

      {/* Terminal Input Line */}
      <form onSubmit={handleCommand} className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
        <span className="text-[#d4973b] font-bold">❯</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isAr ? "اكتب 'help' لعرض الأوامر..." : "type 'help', 'stack', 'audit', 'pricing'..."}
          className="w-full bg-transparent text-white font-mono text-xs outline-none placeholder-slate-600"
          dir="ltr"
        />
      </form>
    </div>
  );
}
