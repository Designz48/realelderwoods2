// src/components/PayPalButtons.jsx
import { useEffect, useRef } from "react";

/**
 * Props:
 *   items – array of objects the back‑end expects:
 *           [{ name, unit_amount, quantity }]
 *   onSuccess – optional callback after a successful capture
 */
export default function PayPalButtons({ items, onSuccess }) {
  const btnContainer = useRef(null);

  // Helper: ask the server to create an order and return its ID
  const createOrderOnServer = async () => {
    const response = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    const data = await response.json(); // { id: "ORDER_ID" }
    return data.id;
  };

  // Helper: after PayPal approves, tell the server to capture
  const captureOrderOnServer = async (orderId) => {
    const response = await fetch("/api/paypal/capture-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId }),
    });
    return await response.json(); // contains status, capture details
  };

  useEffect(() => {
    // Wait until the PayPal SDK has attached itself to window
    if (!window.paypal) {
      console.warn("PayPal SDK not loaded yet.");
      return;
    }

    // Clean any previous button (important when navigating back/forth)
    btnContainer.current.innerHTML = "";

    window.paypal.Buttons({
      // Called when the buyer clicks the button
      createOrder: async () => {
        const orderId = await createOrderOnServer();
        return orderId; // PayPal will use this ID for the checkout UI
      },

      // Called after the buyer approves the payment
      onApprove: async (data) => {
        const capture = await captureOrderOnServer(data.orderID);
        if (capture.status === "COMPLETED") {
          alert(`✅ Payment successful! Order ID: ${data.orderID}`);
          if (onSuccess) onSuccess(data.orderID);
        } else {
          alert("⚠️ Payment not completed.");
        }
      },

      onCancel: () => {
        alert("Payment cancelled.");
      },

      onError: (err) => {
        console.error(err);
        alert("❌ Something went wrong with PayPal.");
      },
    }).render(btnContainer.current);
  }, [items, onSuccess, createOrderOnServer]);

  return <div ref={btnContainer} />;
}
