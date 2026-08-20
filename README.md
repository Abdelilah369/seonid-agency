# SEONID AGENCY — Website

Next.js 16 (App Router, Turbopack) site for SEONID AGENCY. Built against
[../build-brief.md](../build-brief.md) and [../best-principles.md](../best-principles.md).

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en`.

## Structure

- `app/[locale]/` — all pages, under a locale segment. Only `en` is live today
  (see `lib/i18n.ts`); `fr`/`ar` are wired into the architecture (routing,
  RTL support via `isRtl()`) but intentionally have no content yet rather
  than shipping machine-translated placeholders.
- `proxy.ts` — redirects `/` → `/en`. (Next.js 16 renamed `middleware` to `proxy`.)
- `components/` — `Header`, `Footer`, `CtaButton`, `WovenDivider` (the static
  signature motif used on every page except the homepage hero), `AuditForm`,
  and the film hero pipeline: `HeroFilm`, `FilmScrubber`, `FilmDivider`.
- `app/api/audit/route.ts` — **stub**. Validates the free-audit form submission
  but does not send it anywhere yet. Wire it to a real provider (Resend,
  a CRM webhook, etc.) before launch.

## Homepage hero: scroll-scrubbed film

Modeled on [pear.no](https://pear.no)'s technique (confirmed by inspecting
their network requests, not guesswork): a "film" is pre-rendered to a numbered
sequence of static frame images at responsive tiers, described by a
`manifest.json`, and a pinned canvas draws whichever frame matches scroll
position — no video-seek lag, unlike scrubbing an actual `<video>` element.

- `components/FilmScrubber.tsx` — the pinned scroll-to-frame canvas. Fetches
  `/public/films/<name>/manifest.json` (shape: `{"tiers": {"<width>": {"count"}}}`),
  picks a tier by viewport width, preloads all frames, and on each animation
  frame maps scroll progress through a pacing table (control points + eased
  interpolation between them — see `DEFAULT_PACING`) to a frame index.
- `components/FilmDivider.tsx` — the one piece of the signature woven-line
  motif that lives on canvas instead of SVG: `HeroFilm` samples a pixel color
  out of the currently-drawn film frame every few frames and feeds it in as
  the divider's stroke color, so the divider reads as *of* the film rather
  than sitting on top of it.
- `public/films/woven/` — the current film: 123 frames × 2 tiers (640px/1280px),
  generated via `gpt-image-2` (keyframe still) → `sora-2` (8s animation,
  image-to-video from that keyframe) → `ffmpeg` frame extraction. The
  generation script is at `../assets/film-source/generate-film.mjs`; the
  source `.mp4` and keyframe `.png` are kept alongside it.
- **Note on Sora 2**: OpenAI's Videos API sunsets September 24, 2026. This
  isn't a runtime risk for the shipped site — the finished frames are static
  assets in `public/`, no Sora API call happens at request time — but *new*
  or *replacement* films need to be generated before that date, or with a
  different video model afterward.
- Simplification vs. the reference: frames are drawn via plain Canvas 2D
  (`drawImage`), not WebGL/shaders. Pear's use of an actual WebGL canvas
  suggests they may do shader-based color grading or blending; nothing here
  currently needs that, so 2D canvas was the right-sized choice. If a shader
  effect is wanted later, `FilmScrubber` is the file to extend.

## Design system

- Display face: **Bricolage Grotesque** (its name literally means "DIY/tinkering"
  in French — a deliberate nod to a website-*building* agency for a bilingual
  FR/EN/AR audience). Body face: **Public Sans**.
- Colors: forest-teal ink (`--ink`) on a sage-paper ground (`--bg`), with a
  single accent — warm straw-gold (`--accent`) — tied to the brand's "nid"
  (French for *nest*) concept in the SEO**nid** wordmark. See `app/globals.css`
  for the full light/dark token set.
- Signature element: the woven/braided divider (`components/WovenDivider.tsx`),
  representing a nest woven from the strands of design + SEO + content. Used
  sparingly, by design.

## Before this goes live

From `../build-brief.md` section 8 (guardrails) and what's still stubbed:

1. Wire `app/api/audit/route.ts` to a real email/CRM integration.
2. Fill in the About page founder bio (marked with a `[Add: ...]` placeholder
   in `app/[locale]/about/page.tsx`) — no fabricated bio was written in its place.
3. Hero film is in place (see above). Interior-page imagery (Services/Process/
   About section art) still uses no imagery beyond the hero — extend with more
   `gpt-image-2` stills if the design calls for it.
4. French and Arabic content, once translations exist — see `lib/i18n.ts`.
5. Replace the placeholder `app/favicon.ico` with a real mark.

## Deploy

Not yet pushed to GitHub or deployed — per the build plan, that's the next
step after a design review, and needs your explicit go-ahead since it touches
your GitHub/Vercel accounts.
