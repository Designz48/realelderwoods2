// src/pages/Cart.jsx  (or wherever your cart UI lives)
import React, { useState } from "react";
import PayPalButtons from "../components/PayPalButtons"; // the component from the previous answer

export default function Cart() {
  // Assume you already have a way to get the cart items (context, localStorage, etc.)
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Transform cart items into the shape PayPal expects:
  const paypalItems = cartItems.map((i) => ({
    name: i.name,
    unit_amount: i.price,      // price per unit (number)
    quantity: i.quantity,
  }));

  // Optional: after a successful capture you might want to clear the cart
  const handleSuccess = (orderId) => {
    // Clear localStorage / context
    localStorage.removeItem("cart");
    setCartItems([]);
    // Navigate to a thank‑you page, show a toast, etc.
    alert(`✅ Order ${orderId} completed!`);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {/* Render cart rows here … */}

      {/* ---- PayPal button replaces the old “Checkout” button ---- */}
      {paypalItems.length > 0 ? (
        <PayPalButtons items={paypalItems} onSuccess={handleSuccess} />
      ) : (
        <p>Your cart is empty.</p>
      )}
    </section>
  );
}
