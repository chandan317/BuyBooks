import React, { useState } from "react";
import Card from "./Card";
import Axios from "axios";
import "./style.css";
const Main = ({ handleClick }) => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook = (evt) => {
    // Axios.get("AIzaSyAuLcYCXa641uxNJWPtCXCWmUgoPLnBBaA")
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        search +
        "&key=AIzaSyAuLcYCXa641uxNJWPtCXCWmUgoPLnBBaA" +
        "&maxResults=40"
    )
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            "Reading Book is important. If you know <br /> how to read, then the
            whole
            <br />
            world opens up to you." <b></b>
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book </h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button
              onClick={(e) => setSearch(e.target.value)}
              value={search}
              onKeyPress={searchBook}
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRld7kGKZGKNkbIVJFWE1hKmqF_3aksMQL6SZSErOY2jw&s"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        {
          <Card
            bookData={bookData}
            key={bookData.id}
            handleClick={handleClick}
          />
        }
      </div>
    </>
  );
};
export default Main;
