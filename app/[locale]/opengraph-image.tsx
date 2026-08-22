import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const isRtl = locale === "ar";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0e1714",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(226,169,79,0.18), transparent 55%), radial-gradient(circle at 10% 90%, rgba(226,169,79,0.10), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 40,
            fontWeight: 700,
            color: "#edeee6",
            letterSpacing: "-0.02em",
          }}
        >
          SEO<span style={{ color: "#e2a94f" }}>nid</span>
          <span style={{ marginLeft: 14, color: "#6e7a70", fontWeight: 500, fontSize: 28 }}>AGENCY</span>
        </div>

        <div
          style={{
            marginTop: 40,
            width: 90,
            height: 4,
            background: "#e2a94f",
            borderRadius: 4,
          }}
        />

        {/* Satori (next/og's renderer) can't shape Arabic script with the default
            fallback font, so the AR variant shows a script-neutral tagline instead
            of the translated headline — the page's actual <title>/<meta> stay fully
            localized, this only affects the rasterized share-card image. */}
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 46,
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#edeee6",
            maxWidth: 900,
          }}
        >
          {isRtl ? "Websites and Growth, Built on Evidence." : dict.home.heroHeadline}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 24,
            color: "#a9b3a9",
          }}
        >
          seonid.agency
        </div>
      </div>
    ),
    { ...size }
  );
}
