import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { createPageUrl } from "../utils/createPageUrl";

import CartItem from "../components/CartItem";
import CheckoutButton from "../components/CheckoutButton";

/* --------------------------------------------------------------
   Sample product catalogue – you can replace this with real data later
   -------------------------------------------------------------- */
const CATALOG = [
  {
    id: 1,
    name: "Elderwood Tea",
    price: 12.99,
    img: "/images/tea-1.jpg",
  },
  {
    id: 2,
    name: "Woodland Mug",
    price: 8.5,
    img: "/images/mug-1.jpg",
  },
  {
    id: 3,
    name: "Forest Candle",
    price: 5.75,
    img: "/images/candle-1.jpg",
  },
];

/* --------------------------------------------------------------
   Main Cart page component – **no API changes**, just UI polish
   -------------------------------------------------------------- */
export default function Cart() {
  const [cart, setCart] = useState([]); // [{id, name, price, quantity}]
  const [total, setTotal] = useState(0);

  /* ------------------- Load persisted cart ------------------- */
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  /* ------------------- Re‑calculate total ------------------- */
  useEffect(() => {
    const sum = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(parseFloat(sum.toFixed(2)));
  }, [cart]);

  /* ------------------- Update quantity helper ---------------- */
  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((it) =>
          it.id === id
            ? { ...it, quantity: Math.max(it.quantity + delta, 0) }
            : it
        )
        .filter((it) => it.quantity > 0)
    );
  };

  /* ------------------- Empty‑cart placeholder ---------------- */
  if (cart.length === 0) {
    return (
      <main className="page py-12">
        <h1 className="page-title flex items-center text-3xl font-bold mb-6">
          <Leaf className="mr-2 w-8 h-8" />
          Your Cart
        </h1>

        <p className="text-lg text-gray-600 mb-4">
          Your cart is empty. Browse our{" "}
          <Link
            to={createPageUrl("Products")}
            className="text-green-600 underline"
          >
            shop
          </Link>{" "}
          and add items.
        </p>
      </main>
    );
  }

  /* ------------------- Main cart UI ------------------- */
  return (
    <main className="page py-12">
      {/* Header */}
      <h1 className="page-title flex items-center text-3xl font-bold mb-6">
        <Leaf className="mr-2 w-8 h-8" />
        Your Cart
      </h1>

      {/* Table of items */}
      <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Product
              </th>
              <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">
                Price
              </th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                Qty
              </th>
              <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onChangeQty={(delta) => updateQuantity(item.id, delta)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary & Checkout */}
      <div className="mt-8 flex flex-col md:flex-row md:justify-between items-start md:items-center">
        {/* Total */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">
            Total:{" "}
            <span className="text-green-800">
              ${total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </h2>
        </div>

        {/* Checkout buttons */}
        <div className="clay-button flex flex-col sm:flex-row gap-3">
          <CheckoutButton provider="paypal" amount={total} />
        </div>
      </div>

      {/* Back‑to‑shop link */}
      <p className="mt-8">
        <Link
          to={createPageUrl("Products")}
          className="inline-flex items-center text-green-600 hover:underline"
        >
          <Leaf className="mr-1 w-4 h-4" />
          Continue Shopping
        </Link>
      </p>
    </main>
  );
}
