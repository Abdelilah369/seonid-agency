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
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold tracking-tight transition-colors";
  const solid =
    "bg-accent text-[#1a1206] hover:bg-accent-deep hover:text-[#1a1206]";
  const outline =
    "border border-border text-ink hover:border-accent hover:text-accent-deep";

  return (
    <Link href={href} className={`${base} ${variant === "solid" ? solid : outline}`}>
      {children}
    </Link>
  );
}
