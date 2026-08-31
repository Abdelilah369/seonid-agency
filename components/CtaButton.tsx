import Link from "next/link";

export default function CtaButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[14.5px] font-bold tracking-tight transition-all duration-300 active:scale-95";
  const solid =
    "bg-[#d4973b] text-[#080a0d] shadow-lg shadow-[#d4973b]/20 hover:bg-[#e5ad58] hover:shadow-xl hover:shadow-[#d4973b]/30 hover:scale-[1.02]";
  const outline =
    "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-[#d4973b] hover:text-[#d4973b] hover:bg-[#d4973b]/10";

  return (
    <Link href={href} className={`${base} ${variant === "solid" ? solid : outline}`}>
      {children}
    </Link>
  );
}
