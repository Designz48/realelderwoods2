// src/pages/Checkout.jsx
import React, { useEffect, useState } from "react";
import PayPalButtons from "../components/PayPalButtons";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage (or replace with your own store)
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    setCartItems(stored ? JSON.parse(stored) : []);
  }, []);

  const paypalItems = cartItems.map((i) => ({
    name: i.name,
    unit_amount: i.price,
    quantity: i.quantity,
  }));

  const handleSuccess = (orderId) => {
    // Clear cart after successful capture
    localStorage.removeItem("cart");
    setCartItems([]);
    // Redirect to a thank‑you page
    window.location.href = `/thank-you?orderId=${orderId}`;
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Simple cart summary */}
      {paypalItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Shop now</Link>.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {paypalItems.map((i, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{i.name} × {i.quantity}</span>
                <span>${(i.unit_amount * i.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          {/* PayPal button */}
          <PayPalButtons items={paypalItems} onSuccess={handleSuccess} />
        </>
      )}
    </section>
  );
}
