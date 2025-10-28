/* -------------------------------------------------------------
   app.js – client‑side PayPal integration
   ------------------------------------------------------------- */

// 1️⃣  Helper: call your back‑end to create an order
async function createOrderOnServer() {
  // The payload matches what the server expects:
  // an array called `items` with name, unit_amount, quantity.
  const payload = {
    items: [
      {
        name: "Spearmint Leaves (Freeze‑Dried)",
        unit_amount: 9.99,   // price per unit in USD
        quantity: 1
      }
      // You can add more items here if you want a cart‑style checkout
    ]
  };

  const response = await fetch("/api/paypal/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Server responded ${response.status}: ${err}`);
  }

  const data = await response.json(); // { id: "ORDER_ID_FROM_PAYPAL" }
  return data.id; // <-- this is the PayPal order ID
}

// 2️⃣  Render the PayPal button
paypal.Buttons({

  // Called when the buyer clicks the button.
  // We ask our server for a fresh order ID.
  createOrder: async () => {
    try {
      const orderId = await createOrderOnServer();
      return orderId;               // PayPal will use this ID for the checkout
    } catch (err) {
      console.error("Failed to create order:", err);
      alert("Sorry – we couldn’t start the payment. See console for details.");
    }
  },

  // Called after the buyer approves the payment on PayPal’s site.
  // Because we used `intent: "CAPTURE"` on the server, the payment
  // is already captured – we just need to inform the user.
  onApprove: async (data, actions) => {
    // `data.orderID` is the same ID we got from the server.
    // If you ever switch to a two‑step flow (authorize → capture),
    // you would call `actions.order.capture()` here.
    alert(`✅ Payment successful! Order ID: ${data.orderID}`);

    // OPTIONAL: you could POST the orderID to another endpoint
    // that records the sale in your database, sends an email, etc.
  },

  // Buyer clicked “Cancel” on the PayPal page.
  onCancel: (data) => {
    alert("Payment cancelled – you can keep shopping.");
  },

  // Something went wrong (network, SDK error, etc.).
  onError: (err) => {
    console.error("PayPal button error:", err);
    alert("An unexpected error occurred. Check the console for details.");
  }

}).render("#paypal-button-container"); // <-- injects the button into the div
