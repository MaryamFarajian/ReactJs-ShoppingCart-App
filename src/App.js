import React from "react";
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import store from "./redux/store";
import {Provider} from "react-redux";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
   <>
   <BrowserRouter>
   <Provider store={store}>
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<ShoppingCart/>} />
          </Routes>
    </Provider>
   </BrowserRouter>
   </>
  );
}

export default App;
