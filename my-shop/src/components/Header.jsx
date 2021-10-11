import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import CartButton from "./buttons/CartButton";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  activeStyle={{ color: "#cf7b4a" }}
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  style={{ color: "black" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeStyle={{ color: "#cf7b4a" }}
                  className="nav-link"
                  to="/products"
                  style={{ color: "black" }}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeStyle={{ color: "#cf7b4a" }}
                  className="nav-link"
                  to="/about"
                  style={{ color: "black" }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeStyle={{ color: "#cf7b4a" }}
                  className="nav-link"
                  to="/contact"
                  style={{ color: "black" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink
              exact
              className="navbar-brand mx-auto fw-bold"
              to="/"
              style={{ color: "#cf7b4a" }}
            >
              MISC-STORE
            </NavLink>

            <Login />
            <Signup />
            <CartButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
