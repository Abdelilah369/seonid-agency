"use client";

import { useEffect, useRef } from "react";

/**
 * Canvas variant of the woven signature motif, used only where a film is
 * playing behind it (currently the homepage hero). Its stroke color is
 * whatever was last sampled out of the film frame by FilmScrubber's
 * onFrame callback, so the divider visually stays "of" the film rather
 * than sitting on top of it as a fixed accent color.
 */
export default function FilmDivider({
  color,
  className = "",
}: {
  color: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const midY = h / 2;
    const step = 30;

    function wave(offset: number, alpha: number) {
      ctx!.beginPath();
      ctx!.moveTo(0, midY);
      for (let x = 0; x <= w; x += step) {
        const cx = x + step / 2;
        const cy = midY + (offset === 0 ? -5 : 5);
        const ex = x + step;
        ctx!.quadraticCurveTo(cx, cy, ex, midY);
      }
      ctx!.strokeStyle = color;
      ctx!.globalAlpha = alpha;
      ctx!.lineWidth = 1.6;
      ctx!.lineCap = "round";
      ctx!.stroke();
    }

    wave(0, 1);
    wave(1, 0.45);
  }, [color]);

  return <canvas ref={canvasRef} className={`h-[10px] w-full ${className}`} aria-hidden="true" />;
}
