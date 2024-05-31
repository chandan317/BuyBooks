import Main from "./Components/Main";
import React, { useState } from "react";
import "./Components/style.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

const App = () => {
  const [showw, setShoww] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind] += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };

  return (
    <div className="App">
      <Navbar size={cart.length} setShoww={setShoww} />
      {showw ? (
        <Main handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {warning && (
        <div className="warning">Item is already added to your cart.</div>
      )}
    </div>
  );
};

export default App;
