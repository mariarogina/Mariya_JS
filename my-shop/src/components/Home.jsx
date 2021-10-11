import React from "react";
import Products from "./Products";

const Home = (props) => {
  return (
    <div style={{ width: "1100px", textAlign: "center", margin: "auto" }}>
      <Products myData={props.myData} />
    </div>
  );
};

export default Home;
