// src/components/PayPalLoader.jsx
import { useEffect } from "react";

/**
 * Dynamically injects the PayPal JavaScript SDK.
 *
 * Props:
 *   clientId   – your PayPal client‑ID (string)
 *   currency   – default currency, e.g. "USD" (optional, defaults to USD)
 *   components – which PayPal components to load, e.g. "buttons" (optional)
 */
export default function PayPalLoader({
  clientId,
  currency = "USD",
  components = "buttons",
}) {
  useEffect(() => {
    // If the SDK is already on the page, skip injection
    const alreadyLoaded = document.querySelector(
      `script[src*="${clientId}"]`
    );
    if (alreadyLoaded) return;

    // Build the script URL
    const src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=${components}&currency=${currency}`;

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    // Cleanup if the component ever unmounts (unlikely for a page‑level component)
    return () => {
      document.body.removeChild(script);
    };
  }, [clientId, currency, components]);

  // This component renders nothing visible
  return null;
}
