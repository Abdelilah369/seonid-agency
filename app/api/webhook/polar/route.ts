import { validateEvent, WebhookVerificationError } from "@polar-sh/sdk/webhooks";

// POST /api/webhook/polar
//
// Verifies the Polar webhook signature, then dispatches on event type.
// Business logic (fulfillment, granting access, syncing customer state,
// etc.) is intentionally left as TODOs — this route only wires up
// verification + routing, per the integration spec.
export async function POST(request: Request) {
  const body = await request.text();
  const headers = {
    "webhook-id": request.headers.get("webhook-id") ?? "",
    "webhook-timestamp": request.headers.get("webhook-timestamp") ?? "",
    "webhook-signature": request.headers.get("webhook-signature") ?? "",
  };

  let event;
  try {
    event = validateEvent(body, headers, process.env.POLAR_WEBHOOK_SECRET!);
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      return new Response("Invalid signature", { status: 403 });
    }
    throw error;
  }

  switch (event.type) {
    case "order.paid": {
      // TODO: fulfill the order — e.g. grant access to the purchased
      // digital product, send a delivery email, mark the order in a DB.
      // event.data has the full Order object (customer, product, etc).
      break;
    }
    case "customer.state_changed": {
      // TODO: sync this customer's current state (active benefits,
      // subscriptions, entitlements) into your own system if/when you
      // start tracking customers outside of Polar.
      // event.data has the full CustomerState object.
      break;
    }
    default:
      // Ignore event types we don't handle yet.
      break;
  }

  return new Response("OK", { status: 200 });
}
