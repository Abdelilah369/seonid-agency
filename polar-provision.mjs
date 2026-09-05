#!/usr/bin/env node
/**
 * One-time Polar provisioning script.
 *
 * Run this yourself, in your own terminal, on a machine with normal internet
 * access (api.polar.sh is not reachable from Claude's sandboxes). It:
 *
 *   1. Verifies your POLAR_ACCESS_TOKEN can see the seonid organization.
 *   2. Creates (or reuses, if already created) the two digital products:
 *        - Local Business Starter Kit — $49
 *        - AI Automation Playbook for Local Businesses — $29
 *   3. Creates (or reuses) a webhook endpoint pointed at
 *      https://seonid.agency/api/webhook/polar, listening for
 *      order.paid and customer.state_changed.
 *   4. Writes the resulting product IDs and webhook secret straight into
 *      .env.local — nothing secret is printed to the terminal.
 *
 * Usage (from the site/ directory):
 *   node polar-provision.mjs
 *
 * Safe to re-run: it looks up existing products/webhooks by name/URL before
 * creating new ones, so running it twice won't create duplicates.
 */

import { Polar } from "@polar-sh/sdk";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ORG_ID = "584a0333-ec6b-4c4b-acbc-a9245cbef4cf";
const WEBHOOK_URL = "https://seonid.agency/api/webhook/polar";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, ".env.local");

function loadEnvLocal() {
  if (!existsSync(envPath)) {
    console.error(`Could not find .env.local at ${envPath}`);
    console.error("Run this script from inside the site/ directory.");
    process.exit(1);
  }
  const raw = readFileSync(envPath, "utf8");
  const env = {};
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    env[key] = value;
  }
  return env;
}

function setEnvLocalValues(updates) {
  let raw = readFileSync(envPath, "utf8");
  for (const [key, value] of Object.entries(updates)) {
    const pattern = new RegExp(`^${key}=.*$`, "m");
    const line = `${key}=${value}`;
    if (pattern.test(raw)) {
      raw = raw.replace(pattern, line);
    } else {
      raw += `\n${line}\n`;
    }
  }
  writeFileSync(envPath, raw);
}

async function main() {
  const env = loadEnvLocal();
  const accessToken = env.POLAR_ACCESS_TOKEN;
  const server = env.POLAR_SERVER === "sandbox" ? "sandbox" : "production";

  if (!accessToken) {
    console.error("POLAR_ACCESS_TOKEN is empty in .env.local — paste your token there first.");
    process.exit(1);
  }

  const polar = new Polar({ accessToken, server });

  console.log(`Verifying access to organization ${ORG_ID} (server: ${server})...`);
  const org = await polar.organizations.get({ id: ORG_ID });
  console.log(`OK — authenticated as an org token for "${org.name}" (slug: ${org.slug}).`);

  const productSpecs = [
    {
      envKey: "NEXT_PUBLIC_POLAR_PRODUCT_STARTER",
      name: "Local Business Starter Kit",
      description:
        "A fast, SEO-ready Next.js starter template for local service businesses. One config file to rebrand, LocalBusiness JSON-LD built in, dark theme, WhatsApp click-to-chat — launch your own site in an afternoon.",
      priceAmount: 4900,
    },
    {
      envKey: "NEXT_PUBLIC_POLAR_PRODUCT_PLAYBOOK",
      name: "AI Automation Playbook for Local Businesses",
      description:
        "A practical guide to chatbots, WhatsApp automation, and ready-to-use prompts for booking, FAQs, and lead capture — built for local service businesses.",
      priceAmount: 2900,
    },
  ];

  const envUpdates = {};

  for (const spec of productSpecs) {
    console.log(`\nChecking for existing product "${spec.name}"...`);
    let existing;
    for await (const page of await polar.products.list({
      organizationId: ORG_ID,
      query: spec.name,
      isArchived: false,
    })) {
      existing = page.result.items.find((p) => p.name === spec.name);
      if (existing) break;
    }

    if (existing) {
      console.log(`Found existing product (id: ${existing.id}) — reusing it.`);
      envUpdates[spec.envKey] = existing.id;
      continue;
    }

    console.log(`Creating product "${spec.name}" ($${(spec.priceAmount / 100).toFixed(2)})...`);
    const product = await polar.products.create({
      name: spec.name,
      description: spec.description,
      organizationId: ORG_ID,
      prices: [
        {
          amountType: "fixed",
          priceAmount: spec.priceAmount,
          priceCurrency: "usd",
        },
      ],
    });
    console.log(`Created (id: ${product.id}).`);
    envUpdates[spec.envKey] = product.id;
  }

  console.log(`\nChecking for existing webhook endpoint at ${WEBHOOK_URL}...`);
  let existingWebhook;
  for await (const page of await polar.webhooks.listWebhookEndpoints({
    organizationId: ORG_ID,
  })) {
    existingWebhook = page.result.items.find((w) => w.url === WEBHOOK_URL);
    if (existingWebhook) break;
  }

  if (existingWebhook) {
    console.log(
      `A webhook endpoint for this URL already exists (id: ${existingWebhook.id}).`
    );
    console.log(
      "Its signing secret was only shown once, at creation time, and this script can't recover it."
    );
    console.log(
      "If POLAR_WEBHOOK_SECRET in .env.local is already set correctly, you're done."
    );
    console.log(
      "Otherwise, delete this endpoint in the Polar dashboard and re-run this script to get a fresh secret."
    );
  } else {
    console.log("Creating webhook endpoint...");
    const webhook = await polar.webhooks.createWebhookEndpoint({
      url: WEBHOOK_URL,
      name: "seonid-agency site",
      format: "raw",
      events: ["order.paid", "customer.state_changed"],
      organizationId: ORG_ID,
    });
    console.log(`Created (id: ${webhook.id}). Writing its secret into .env.local.`);
    envUpdates.POLAR_WEBHOOK_SECRET = webhook.secret;
  }

  setEnvLocalValues(envUpdates);

  console.log("\nDone. .env.local has been updated with:");
  for (const key of Object.keys(envUpdates)) {
    console.log(`  - ${key}`);
  }
  console.log(
    "\nNext: add the same POLAR_ACCESS_TOKEN, POLAR_WEBHOOK_SECRET, POLAR_SERVER, and the two"
  );
  console.log(
    "NEXT_PUBLIC_POLAR_PRODUCT_* values as environment variables in your Vercel project settings,"
  );
  console.log(
    "then redeploy. Finally, open each product in the Polar dashboard and attach its deliverable"
  );
  console.log(
    "file (the .zip / .pdf) as a downloadable benefit — that part is easiest done by hand."
  );
}

main().catch((err) => {
  console.error("\nProvisioning failed:", err?.message ?? err);
  process.exit(1);
});
