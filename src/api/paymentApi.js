// src/api/paymentApi.js
// -------------------------------------------------------------------
// Placeholder functions – replace with real fetch calls when you’re ready.
// -------------------------------------------------------------------
export async function createPaypalOrder(totalUsd) {
  // TODO: call your backend → POST /api/paypal { amount: totalUsd }
  // For now just return a dummy URL.
  return Promise.resolve("https://example.com/paypal-placeholder");
}

export async function createStripeSession(totalUsd) {
  // TODO: call your backend → POST /api/stripe { amount: totalUsd }
  return Promise.resolve("https://example.com/stripe-placeholder");
}

export async function createSquarePayment(totalUsd) {
  // TODO: call your backend → POST /api/square { amount: totalUsd }
  return Promise.resolve("https://example.com/square-placeholder");
}
