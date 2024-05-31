import React from "react";
import "./style.css";

function Navbar({ size, setShoww }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShoww(true)}>
          BuyBooks
        </span>
        <div className="cart" onClick={() => setShoww(false)}>
          <span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
