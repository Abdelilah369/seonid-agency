import { baseEntityGraph } from "@/lib/jsonld";

/**
 * Renders the SEONID Organization / ProfessionalService entity graph as
 * JSON-LD on every page (SSG-safe: pure static output, no dynamic headers).
 */
export default function EntitySchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": baseEntityGraph(),
        }),
      }}
    />
  );
}
