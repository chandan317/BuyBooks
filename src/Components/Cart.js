import React, { useEffect, useState } from "react";
import "./style.css";

const Cart = ({ cart, setCart, item, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div>
      <article>
        {cart?.map((item) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          let amount =
            item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          let title = item.volumeInfo.title;

          return (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={thumbnail} alt="" />
                <p>{title}</p>
              </div>
              <div>
                <button onClick={() => handleChange(item, +1)}>+</button>
                <button>{price}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div>
                <span>{amount}</span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          );
        })}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
      <a
        className="btn btn-primary"
        id="payment"
        href="https://buy.stripe.com/test_5kA4hK2yo13deDScMM"
      >
        Make Payment
      </a>
    </div>
  );
};

export default Cart;
