import { Polar } from "@polar-sh/sdk";

// Single shared Polar SDK client, reused across all routes.
// Server (sandbox vs production) comes from POLAR_SERVER so switching
// environments later is only an env change, never a code change.
export const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  server: (process.env.POLAR_SERVER as "sandbox" | "production") ?? "production",
});
