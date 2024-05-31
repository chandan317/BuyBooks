import React, { useState } from "react";

import "./style.css";
import Modal from "./Modal";
const Card = ({ bookData, handleClick }) => {
  // console.log(book);
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  return (
    <>
      {" "}
      <h1>YOUR SEARCH RESULT</h1>
      {bookData.map((item) => {
        // console.log(item.volumeInfo.imageLinks.smallThumbnail);
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        let title = item.volumeInfo.title;
        let author = item.volumeInfo.authors;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <div className="card">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3
                    className="title"
                    onClick={() => {
                      setShow(true);
                      setBookItem(item);
                    }}
                  >
                    {title}
                  </h3>
                  <h2
                    className="author"
                    onClick={() => {
                      setShow(true);
                      setBookItem(item);
                    }}
                  >
                    {author}
                  </h2>
                  <p
                    className="amount"
                    onClick={() => {
                      setShow(true);
                      setBookItem(item);
                    }}
                  >
                    &#8377; {amount}
                  </p>
                  <button className="cart" onClick={() => handleClick(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};
export default Card;
