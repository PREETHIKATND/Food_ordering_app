// Home.jsx (or the component where your "Cart" button is located)
import React, { useState } from "react";
import Restaur3 from "../Restaurant/Restaur3/Restaur3";
import CartActions from "./CartActions"; // Import the CartActions component

function Home() {
    const [showCart, setShowCart] = useState(false); // State to control cart visibility

    const toggleCart = () => {
        setShowCart(!showCart); // Toggle cart visibility
    };

    return (
        <div>
            <header>
                <h1>Welcome to Your Burger Shop</h1>
                <button onClick={toggleCart}>Cart</button>
            </header>
            <main>
                <Restaur3 />
            </main>
            {showCart && <CartActions />}
        </div>
    );
}

export default Home;
