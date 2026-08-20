import React from "react";

/**
 * Signature SEONID AGENCY Brand Logo.
 * Features the woven "Nid" (Nest) intertwined golden geometric strands
 * representing SEO engineering + architectural craft.
 */
export function SeonidLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="seonid-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2a94f" />
          <stop offset="50%" stopColor="#c08a2e" />
          <stop offset="100%" stopColor="#8c6420" />
        </linearGradient>
        <linearGradient id="seonid-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e382f" />
          <stop offset="100%" stopColor="#0e1714" />
        </linearGradient>
      </defs>

      {/* Hexagonal Woven Crest Base */}
      <rect
        x="20"
        y="2"
        width="25"
        height="25"
        rx="6"
        transform="rotate(45 20 2)"
        fill="url(#seonid-emerald)"
        stroke="url(#seonid-gold)"
        strokeWidth="1.5"
      />

      {/* Interlocking Golden Braided Strands ("S" & "N") */}
      <path
        d="M14 26 C14 20, 26 20, 26 14"
        stroke="url(#seonid-gold)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M26 26 C26 20, 14 20, 14 14"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Center Core Precision Spark */}
      <circle cx="20" cy="20" r="2.2" fill="url(#seonid-gold)" />
    </svg>
  );
}
