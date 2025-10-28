/// -------------------------------------------------
// index.js   (ES‑module, works with "type": "module")
// -------------------------------------------------

/* -------------------------------------------------
   1️⃣ Load environment variables from .env
   ------------------------------------------------- */
import dotenv from "dotenv";
dotenv.config();

/* -------------------------------------------------
   2️⃣ Core Node utilities (needed for __dirname)
   ------------------------------------------------- */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

/* -------------------------------------------------
   3️⃣ Third‑party libraries
   ------------------------------------------------- */
import express from "express";
import cors from "cors";
import checkoutNodeJssdk from "@paypal/checkout-server-sdk";

/* -------------------------------------------------
   4️⃣ Verify that the PayPal env vars are loaded
   ------------------------------------------------- */
console.log(
  "PayPal client ID loaded:",
  !!process.env.PAYPAL_CLIENT_ID // true → env var present
);

/* -------------------------------------------------
   5️⃣ Configure the PayPal SDK (sandbox or live)
   ------------------------------------------------- */
function environment() {
  if (process.env.PAYPAL_MODE === "live") {
    return new checkoutNodeJssdk.core.LiveEnvironment(
      process.env.PAYPAL_CLIENT_ID,
      process.env.PAYPAL_CLIENT_SECRET
    );
  }
  // default to sandbox
  return new checkoutNodeJssdk.core.SandboxEnvironment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  );
}
const paypalClient = new checkoutNodeJssdk.core.PayPalHttpClient(environment());

/* -------------------------------------------------
   6️⃣ Create the Express app
   ------------------------------------------------- */
const app = express();

/* -------------------------------------------------
   7️⃣ Middleware
   ------------------------------------------------- */
// Allow any origin for local testing – tighten for prod
app.use(cors({ origin: "*" }));
app.use(express.json());

// Serve static files from ./src (your front‑end HTML + JS)
app.use(express.static(path.join(__dirname, "src")));

 /* -------------------------------------------------
   8️⃣ API route – create a PayPal order
   ------------------------------------------------- */
app.post("/api/paypal/create-order", async (req, res) => {
  const { items } = req.body; // expects [{ name, unit_amount, quantity }]

  // Compute total amount (USD)
  const total = items.reduce(
    (sum, i) => sum + i.unit_amount * i.quantity,
    0
  );

  // Build the purchase‑unit payload PayPal expects
  const purchaseUnits = [
    {
      amount: {
        currency_code: "USD",
        value: total.toFixed(2),
        breakdown: {
          item_total: {
            currency_code: "USD",
            value: total.toFixed(2),
          },
        },
      },
      items: items.map((i) => ({
        name: i.name,
        unit_amount: {
          currency_code: "USD",
          value: i.unit_amount.toFixed(2),
        },
        quantity: `${i.quantity}`,
      })),
    },
  ];

  // Create the order request
  const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: purchaseUnits,
  });

  try {
    const order = await paypalClient.execute(request);
    // Return the PayPal order ID to the front‑end
    res.status(201).json({ id: order.result.id });
  } catch (err) {
    console.error("PayPal order creation error:", err);
    res.status(500).json({ error: "Failed to create PayPal order" });
  }
});

/* -------------------------------------------------
   9️⃣ Start the server
   ------------------------------------------------- */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
