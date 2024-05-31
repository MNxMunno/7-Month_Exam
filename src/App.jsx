import React from "react";
import Header from "./components/header/Header";
import Home from "./routers/home/Home";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Detail from "./routers/detail/Detail";
import Contact from "./routers/contact/Contact";
import Wishlist from "./routers/wishlist/Wishlist";
import Admin from "./routers/admin/Admin";
import Cart from "./routers/cart/Cart";
import "./scss/main.scss";
import { useGetProductsQuery } from "./context/api/productApi";
import Auth from "./routers/auth/Auth";
import Login from "./routers/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
