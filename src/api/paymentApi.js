// src/api/paymentApi.js
// -------------------------------------------------
// Example of a clean helper – keep only what you need
// -------------------------------------------------
export async function createOrder(items) {
  // Calculate the grand total (USD)
  const total = items.reduce(
    (sum, i) => sum + i.unit_amount * i.quantity,
    0
  );

  // Build the purchase_units payload for PayPal
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

  // … rest of the function unchanged …
}
