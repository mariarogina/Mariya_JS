import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { useEffect, useState } from "react";

import { Redirect, Route, Switch } from "react-router";
import "./index.css";

function App() {
  const [myData, setMyData] = useState(null);

  //   function createData(id, title, price, description, category, image) {
  //     return {id, title, price, description, category, image};
  //   }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMyData(data);
      });
  }, []);

  if (!myData) {
    return <div>Still Loading</div>;
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home myData={myData} />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products">
          <Products myData={myData} />
        </Route>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products/:id">
          <ProductDetails myData={myData} />
        </Route>
        <Route exact path="/checkout" component={Checkout} />
        <Redirect exact path="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
