import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { addItemToCart, deleteItemFromCart } from "../redux/actions/index";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const ProductDetails = (props) => {
  const [cartButton, setCartButton] = useState("Add to cart");
  const productId = useParams();
  const productInfo = props.myData.filter((x) => x.id == productId.id);
  const product = productInfo[0];
  console.log(product.id);

  let history = useHistory();

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (cartButton === "Add to cart") {
      setCartButton("Remove from cart");
      dispatch(addItemToCart(product));
    } else {
      setCartButton("Add to cart");
      dispatch(deleteItemFromCart(product));
    }
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.image} alt={product.title} height="500px" />
          </div>
          <div
            className="col-md-6 d-flex flex-column justify-content-center"
            style={{ width: "550px" }}
          >
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.description}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="btn btn-outline-success my-3"
            >
              {cartButton}
            </button>
            <button
              className="btn btn-outline-info my-3"
              onClick={() => history.goBack()}
            >
              Back
            </button>

            <button
              className="btn btn-outline-info my-3"
              onClick={() => history.push("/cart")}
            >
              To cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
