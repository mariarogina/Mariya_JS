import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <button
        className="btn btn-outline-primary"
        style={{ margin: "0 10px" }}
        disabled
      >
        Filter goods by typing in
      </button>
    </label>
    <input
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      onSubmit={(e) => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search goods"
      name="s"
    />
  </form>
);

export default SearchBar;
