// src/components/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={() => handleAddToCart({ name: 'Example Item', price: 10 })}>
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;
