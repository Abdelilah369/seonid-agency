# Polar setup

How payments are wired up on this site, and what's left to finish on your end.

## What's done

- `lib/polar.ts` — shared `@polar-sh/sdk` client. Server (`sandbox`/`production`) comes from `POLAR_SERVER`.
- `app/checkout/route.ts` — `GET /checkout?products=<id>&products=<id>` creates a Polar checkout session and redirects there. No success URL is set on purpose — Polar shows its own hosted confirmation after payment.
- `app/api/webhook/polar/route.ts` — verifies the webhook signature, then dispatches on `order.paid` and `customer.state_changed` (both are TODO stubs — no business logic wired up yet).
- `app/[locale]/shop/page.tsx` — the digital products page (all 3 locales), linking each product's buy button to `/checkout?products=<id>` once that product's ID is set in the environment.
- Two real, Polar-compliant digital products, built and ready to sell:
  - **Local Business Starter Kit** ($49) — a Next.js starter template, in `products/Local-Business-Starter-Kit.zip`.
  - **AI Automation Playbook for Local Businesses** ($29) — a PDF guide, in `products/AI-Automation-Playbook-for-Local-Businesses.pdf`.
- `package.json` / `package-lock.json` — `@polar-sh/sdk` added and the lockfile reconciled, so a normal `npm install` (including Vercel's build) will install it cleanly.

## What you need to do

Claude's sandboxes can't reach `api.polar.sh` (blocked by network policy), so the last mile — creating the actual products and webhook endpoint in your Polar org — has to run from your own machine.

1. Make sure `.env.local` has a real `POLAR_ACCESS_TOKEN` (you've already done this) and `POLAR_SERVER=production`.
2. From the `site/` directory, run:

   ```bash
   npm install
   node polar-provision.mjs
   ```

   This verifies the token, creates the two products (or reuses them if they already exist), creates the webhook endpoint at `https://seonid.agency/api/webhook/polar`, and writes the resulting product IDs and webhook secret straight into `.env.local`. Nothing secret gets printed to your terminal. Safe to re-run.

3. Open each product in the [Polar dashboard](https://polar.sh/dashboard/seonid) and attach its file (the `.zip` / `.pdf` from `products/`) as a downloadable benefit. This is the one step done by hand — file uploads use a multi-step signed-URL flow that's much more reliable through the dashboard's own uploader than scripted blind.
4. Copy the same five env vars from `.env.local` into your Vercel project's environment variables (Settings → Environment Variables): `POLAR_ACCESS_TOKEN`, `POLAR_WEBHOOK_SECRET`, `POLAR_SERVER`, `NEXT_PUBLIC_POLAR_PRODUCT_STARTER`, `NEXT_PUBLIC_POLAR_PRODUCT_PLAYBOOK`. Redeploy.
5. Test a real checkout end to end once live: visit `/shop`, click buy, complete a purchase, and confirm the webhook fires (Polar dashboard → Webhooks → your endpoint → Deliveries).

## Wiring up real fulfillment (optional next step)

Right now `order.paid` and `customer.state_changed` in `app/api/webhook/polar/route.ts` are empty TODOs. Since these are downloadable files rather than gated software, Polar's own post-purchase download page (shown right after checkout, and emailed to the buyer) already handles delivery — you may not need to write any fulfillment logic at all. If you later want your own record of sales (e.g. to a database, a Slack notification, an email via Resend), that's where it goes.
