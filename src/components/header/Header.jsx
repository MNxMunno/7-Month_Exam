"use client";
import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [toggel, setToggel] = useState(false);
  const [shrink, setShrink] = useState(false);
  const wishlist = useSelector((s) => s.wishlist.value);
  const cart = useSelector((s) => s.cart.value);
  // const navigate = useNavigation();
  let totalPrice = cart
    ?.reduce((acc, el) => acc + el.price * el.quantity, 0)
    .toFixed(2);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });
  return (
    <>
      <div className="header__top">
        <div className="container">
          <div className="content">
            <div className="items">
              <select name="lang" id="lang">
                <option value="eng">Eng</option>
                <option value="uz">Uz</option>
                <option value="ru">Ru</option>
              </select>
              <select name="mony" id="mony">
                <option value="usd">Usd</option>
                <option value="uzs">Uzs</option>
                <option value="rub">Rubl</option>
              </select>
            </div>
            <div className="top__btns">
              <Link to={"/login"}>
                <FaRegUser />
              </Link>
              <Link to={"/wishlist"}>
                <FaRegHeart />
                <sup className="count">{wishlist.length}</sup>
              </Link>
              <Link to={"/cart"}>
                <MdOutlineShoppingCart />
                <sup className="count">{cart.length}</sup>
              </Link>
              <p> Items</p>
              <b>$ {totalPrice}</b>
              <button className="search">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className={`navbar ${shrink ? "shrink" : ""}`}>
        <div className="container">
          <nav>
            <NavLink className="logo" to={"/"}>
              <img src={logo} width={140} height={40} alt="logo" />
            </NavLink>
            <div className={`nav__items ${toggel ? "show" : ""}`}>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/bags"}>Bags</NavLink>
              <NavLink to={"/snakers"}>Snakers</NavLink>
              <NavLink to={"/belt"}>Belt</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
            </div>
            <button className="menu" onClick={() => setToggel(!toggel)}>
              <IoIosMenu />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
