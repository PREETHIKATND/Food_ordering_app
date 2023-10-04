import React, { useState } from "react";
import Swal from "sweetalert2";

import '../../styles/HomeStyle.css'

function Cart({ cartItems, onBuyNow }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const [userInfo, setUserInfo] = useState({
    address: "",
    mobileNumber: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleBuyNow = () => {
    Swal.fire({
      title: "Order Placed!",
      text: "Thank you for your order.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      onBuyNow();

      setUserInfo({
        address: "",
        mobileNumber: "",
        location: "",
      });
    });
  };

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                {/* Add additional table headers for other item details */}
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>₹{item.price}</td>
                  <td><button>remove</button></td>
                  {/* Add additional table cells for other item details */}
                </tr>
              ))}
            </tbody>
           
          </table>
          <h3>Total Price: ₹{total}</h3>

          {/* User Info and Buy Now button */}
          <div className="user-info col-lg-8">
            <h4>Enter Your Information</h4>
            <input
              type="text"
              className="col-lg-6"
              name="address"
              placeholder="Address"
              value={userInfo.address}
              onChange={handleChange}
            />
            <input
              type="text"
              className="col-lg-6"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={userInfo.mobileNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              className="col-lg-6"
              name="location"
              placeholder="Location"
              value={userInfo.location}
              onChange={handleChange}
            />
            <button className="btn btn-success col-lg-6" onClick={handleBuyNow}>Place order</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
