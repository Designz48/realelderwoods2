import React, { useState } from "react";
import {
  createPaypalOrder,
} from "../api/paymentApi";

/**
 * provider – one of "paypal", "stripe", or "square"
 * amount   – total amount in USD (passed from the Cart page)
 */
export default function CheckoutButton({ provider, amount }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // -----------------------------------------------------------------
  // Helper that calls the appropriate placeholder API function.
  // When you replace the stubs in `paymentApi.js` with real calls,
  // this component will work without any further changes.
  // -----------------------------------------------------------------
  const getRedirectUrl = async () => {
    switch (provider) {
      case "paypal":
        return await createPaypalOrder(amount);
      default:
        throw new Error(`Unsupported provider: ${provider}`);
    }
  };

  // -----------------------------------------------------------------
  // Click handler – shows a simple alert for now (you’ll replace it
  // with a real redirect or modal once the back‑end is ready).
  // -----------------------------------------------------------------
  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const redirectUrl = await getRedirectUrl();

      // For now we just inform the developer/user where we would go.
      // Replace the `alert` with `window.location.href = redirectUrl`
      // or with your modal/checkout SDK call.
      alert(
        `Would now redirect to ${provider.toUpperCase()} checkout:\n${redirectUrl}`
      );

      // Uncomment the line below when you have a real URL:
      // window.location.href = redirectUrl;
    } catch (e) {
      console.error(e);
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------
  return (
    <div style={{ display: "inline-block", marginRight: "0.5rem" }}>
      <button
        onClick={handleClick}
        disabled={loading}
        style={{
          backgroundColor: "transparent",
          color: "Blue",
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading
          ? "Preparing…"
          : `Pay with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "0.25rem" }}>
          Error: {error}
        </p>
      )}
    </div>
  );
}
