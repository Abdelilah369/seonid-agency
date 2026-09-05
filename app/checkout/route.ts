import { polar } from "@/lib/polar";

// GET /checkout?products=<id>&products=<id>
//
// Reads one or more Polar product IDs from the query string, opens a Polar
// checkout session for them, and redirects the buyer straight to Polar's
// hosted checkout page. No success URL is set on purpose: Polar shows its
// own hosted confirmation after payment, so this app never needs a
// /checkout/success page.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const products = searchParams.getAll("products").filter(Boolean);

  if (products.length === 0) {
    return new Response("Missing products query parameter", { status: 400 });
  }

  try {
    const checkout = await polar.checkouts.create({ products });
    return Response.redirect(checkout.url, 302);
  } catch (error) {
    console.error("[polar] checkout creation failed", error);
    return new Response("Could not start checkout", { status: 502 });
  }
}
