import React from "react";

/**
 * Props
 * -----
 * item: {
 *   id:       number | string,
 *   name:     string,
 *   price:    number,   // USD
 *   quantity: number
 * }
 * onChangeQty: (delta: number) => void
 *
 * delta is +1 to increase, -1 to decrease.
 */
export default function CartItem({ item, onChangeQty }) {
  // Calculate the subtotal for this line item
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <tr>
      {/* Product name */}
      <td>{item.name}</td>

      {/* Unit price – right‑aligned */}
      <td style={{ textAlign: "right" }}>${item.price.toFixed(2)}</td>

      {/* Quantity controls */}
      <td style={{ textAlign: "center" }}>
        <button
          onClick={() => onChangeQty(-1)}
          disabled={item.quantity <= 1}
          aria-label="decrease quantity"
          style={{
            padding: "0.25rem 0.5rem",
            marginRight: "0.25rem",
            cursor: item.quantity <= 1 ? "not-allowed" : "pointer",
          }}
	    class="clay-button"
        >
          –
        </button>
        {item.quantity}
        <button
          onClick={() => onChangeQty(+1)}
          aria-label="increase quantity"
          style={{
            padding: "0.25rem 0.5rem",
            marginLeft: "0.25rem",
            cursor: "pointer",
          }} 
	    class="clay-button"
        >
          +
        </button>
      </td>

      {/* Subtotal – right‑aligned */}
      <td style={{ textAlign: "right" }}>${subtotal}</td>
    </tr>
  );
}
