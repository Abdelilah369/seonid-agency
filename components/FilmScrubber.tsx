"use client";

import { useEffect, useRef, useState } from "react";

export interface FilmScrubberProps {
  /** Folder name under /public/films/, e.g. "woven" — expects a manifest.json
   *  shaped like { tiers: { "<breakpoint-width>": { count } } } and frame
   *  images at /films/<film>/<tier>/0001.webp, 0002.webp, ... */
  film: string;
  /** [scrollProgress, filmProgress] control points, both 0-1, sorted by scrollProgress.
   *  Lets scroll pace unevenly through the film — e.g. lingering on the opening frame,
   *  then moving quickly through the middle. Defaults to a gentle ease-in-out. */
  pacing?: [number, number][];
  heightVh?: number;
  className?: string;
  /** Called every frame draw with the 2D context and resolved frame index — used by
   *  FilmDivider to sample a live color out of the film rather than a static accent. */
  onFrame?: (ctx: CanvasRenderingContext2D, frameIndex: number, frameCount: number) => void;
  /** Rendered inside the pinned viewport, absolutely positioned over the canvas. */
  children?: React.ReactNode;
}

type Manifest = { tiers: Record<string, { count: number }> };

const DEFAULT_PACING: [number, number][] = [
  [0, 0],
  [0.15, 0.04],
  [0.85, 0.96],
  [1, 1],
];

function paceAt(pacing: [number, number][], t: number) {
  if (t <= pacing[0][0]) return pacing[0][1];
  for (let i = 1; i < pacing.length; i++) {
    const [t0, v0] = pacing[i - 1];
    const [t1, v1] = pacing[i];
    if (t <= t1) {
      const local = (t - t0) / (t1 - t0 || 1);
      const eased = local < 0.5 ? 2 * local * local : 1 - Math.pow(-2 * local + 2, 2) / 2;
      return v0 + (v1 - v0) * eased;
    }
  }
  return pacing[pacing.length - 1][1];
}

function pickTier(tiers: string[]): string {
  const widths = tiers.map(Number).sort((a, b) => a - b);
  const target = window.innerWidth < 900 ? widths[0] : widths[widths.length - 1];
  return String(target);
}

export default function FilmScrubber({
  film,
  pacing = DEFAULT_PACING,
  heightVh = 300,
  className = "",
  onFrame,
  children,
}: FilmScrubberProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);
  const [frameCount, setFrameCount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`/films/${film}/manifest.json`)
      .then((r) => {
        if (!r.ok) throw new Error("no manifest");
        return r.json() as Promise<Manifest>;
      })
      .then((manifest) => {
        if (cancelled) return;
        const tier = pickTier(Object.keys(manifest.tiers));
        const count = manifest.tiers[tier].count;
        setFrameCount(count);

        const images: HTMLImageElement[] = new Array(count);
        let loaded = 0;
        for (let i = 0; i < count; i++) {
          const img = new Image();
          img.decoding = "async";
          img.src = `/films/${film}/${tier}/${String(i + 1).padStart(4, "0")}.jpg`;
          img.onload = () => {
            loaded++;
            if (loaded === count && !cancelled) setReady(true);
          };
          images[i] = img;
        }
        framesRef.current = images;
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [film]);

  useEffect(() => {
    if (!ready || frameCount === 0) return;
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let rafId = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      const rect = wrapper!.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? -rect.top / scrollable : 0;
      const scrollT = Math.min(1, Math.max(0, raw));
      const filmT = paceAt(pacing, scrollT);
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.round(filmT * (frameCount - 1)))
      );

      const img = framesRef.current[frameIndex];
      if (img && img.complete) {
        const cw = window.innerWidth;
        const ch = window.innerHeight;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const scale = Math.max(cw / iw, ch / ih);
        const dw = iw * scale;
        const dh = ih * scale;
        const dx = (cw - dw) / 2;
        const dy = (ch - dh) / 2;
        ctx!.clearRect(0, 0, cw, ch);
        ctx!.drawImage(img, dx, dy, dw, dh);
        onFrame?.(ctx!, frameIndex, frameCount);
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, frameCount, pacing]);

  if (error) {
    // No film assets available (e.g. omitted from this deploy) — degrade to a
    // plain static hero instead of losing the headline/CTA entirely.
    return (
      <div className={`flex min-h-screen w-full items-center bg-bg ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div ref={wrapperRef} style={{ height: `${heightVh}vh` }} className={`relative ${className}`}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg">
        <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
        {children && <div className="absolute inset-0 flex items-center">{children}</div>}
      </div>
    </div>
  );
}
