// Signature motif: a woven/braided line — "nid" (FR: nest) woven from the
// strands of design + SEO + content. Used as a section divider and, in
// smaller form, as an underline device. Deliberately the one recurring
// decorative element on the site — everything else stays quiet.
export default function WovenDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`woven ${className}`}
      viewBox="0 0 240 10"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 5 Q 15 0, 30 5 T 60 5 T 90 5 T 120 5 T 150 5 T 180 5 T 210 5 T 240 5" />
      <path
        d="M0 5 Q 15 10, 30 5 T 60 5 T 90 5 T 120 5 T 150 5 T 180 5 T 210 5 T 240 5"
        opacity="0.45"
      />
    </svg>
  );
}
