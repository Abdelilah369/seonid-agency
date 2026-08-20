"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import FilmScrubber from "./FilmScrubber";
import FilmDivider from "./FilmDivider";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function HeroFilm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [dividerColor, setDividerColor] = useState("#c08a2e");
  const tick = useRef(0);
  const t = dict.home;

  const handleFrame = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      tick.current++;
      if (tick.current % 6 !== 0) return; // sampling every frame is unnecessary work
      try {
        const x = Math.floor(ctx.canvas.width * 0.5);
        const y = Math.floor(ctx.canvas.height * 0.4);
        const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;
        setDividerColor(`rgb(${r}, ${g}, ${b})`);
      } catch {
        // canvas not readable yet on first paint — ignore, next tick retries
      }
    },
    []
  );

  return (
    <FilmScrubber film="woven" heightVh={260} onFrame={handleFrame}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-accent-deep drop-shadow-[0_1px_12px_rgba(14,23,20,0.9)]">
          {t.heroEyebrow}
        </p>
        <h1 className="mt-5 max-w-[18ch] text-balance font-display text-[40px] font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(14,23,20,0.9)] sm:text-[56px]">
          {t.heroHeadline}
        </h1>
        <FilmDivider color={dividerColor} className="mt-6 max-w-[160px]" />
        <p className="mt-7 max-w-[52ch] text-[17px] leading-relaxed text-white/90 drop-shadow-[0_1px_12px_rgba(14,23,20,0.9)] sm:text-[18px]">
          {t.heroSubhead}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href={`/${locale}/audit`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-semibold tracking-tight text-[#1a1206] transition-colors hover:bg-accent-deep"
          >
            {t.heroCtaPrimary}
          </Link>
          <Link
            href={`/${locale}/process`}
            className="text-[15px] font-semibold text-white underline decoration-white/40 decoration-2 underline-offset-4 hover:decoration-white"
          >
            {t.heroCtaSecondary}
          </Link>
        </div>
      </div>
    </FilmScrubber>
  );
}
