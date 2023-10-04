import React from "react";

function CartActions({ cartItems, onBuyNow }) {
  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={onBuyNow}>Buy Now</button>
    </div>
  );
}

export default CartActions;
