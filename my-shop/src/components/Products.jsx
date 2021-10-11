import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Products = (props) => {
  const items = props.myData;

  const filterCards = (items, query) => {
    if (!query) {
      return items;
    }

    return items.filter((item) => {
      const itemTitle = item.title.toLowerCase();
      return itemTitle.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredCards = filterCards(items, searchQuery);

  const cardItem = (item) => {
    return (
      <div className="card my-4 py-4" key={item.id} style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={item.image}
          alt={item.title}
          style={{ height: "330px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink
            to={`/products/${item.id}`}
            className="btn btn-outline-success"
          >
            Buy this
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>PRODUCTS</h1>
            <hr />
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-around">
            {filteredCards.map(cardItem)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
