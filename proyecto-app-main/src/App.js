import Header from "./component/header/Header";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

import cart from "./context/CartContext";
import { useState } from "react";
function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <>
      <cart.Provider value={[cartProducts, setCartProducts]}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </cart.Provider>
    </>
  );
}

export default App;
