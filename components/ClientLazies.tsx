"use client";

import dynamic from "next/dynamic";

// ⚡ All ssr:false dynamic imports live inside this Client Component boundary.
// This satisfies Next 16's rule that ssr:false cannot be used in Server Components.

export const HeroFilm = dynamic(() => import("@/components/HeroFilm"), {
  ssr: false,
  loading: () => <div className="h-[60vh] bg-gradient-to-b from-[#080a0d] via-[#0c0f14] to-[#080a0d]" />,
});

export const LiveAuditScanner = dynamic(() => import("@/components/LiveAuditScanner"), {
  ssr: false,
  loading: () => <div className="h-40 animate-pulse bg-surface" />,
});

export const EngineeringLayers = dynamic(() => import("@/components/EngineeringLayers"), {
  ssr: false,
  loading: () => <div className="h-80 animate-pulse bg-surface" />,
});

export const TechStackShowcase = dynamic(() => import("@/components/TechStackShowcase"), {
  ssr: false,
  loading: () => <div className="h-60 animate-pulse bg-surface" />,
});

export const InteractiveKnowledgeGraph = dynamic(() => import("@/components/InteractiveKnowledgeGraph"), {
  ssr: false,
  loading: () => <div className="h-96 animate-pulse bg-surface" />,
});