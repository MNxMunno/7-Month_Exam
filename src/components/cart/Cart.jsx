import React, { useEffect } from "react";
import { FaCartPlus, FaEye, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../context/slice/cartSlice";
import { toggleHeart } from "../../context/slice/wishlist";
import { useGetProductsQuery } from "../../context/api/productApi";

const Cart = ({ data }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  let cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const card = data?.map((el) => (
    <div key={el.id} className="card">
      <img
        className="pro__img"
        width={100}
        height={100}
        src={el.image}
        alt="img"
      />
      <div className="detail__btns">
        <button onClick={() => dispatch(toggleHeart(el))}>
          {wishlist?.some((item) => item.id === el.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button onClick={() => dispatch(addToCart(el))}>
          <FaCartPlus />
        </button>
        <Link to={`/products/${el.id}`}>
          <button>
            <FaEye />
          </button>
        </Link>
      </div>
      <h3 title={el.title}>{el.title}</h3>
      <p className="stars">⭐⭐⭐⭐⭐</p>
      <span>
        $ {el.price} <del>{el.price * 1.25}</del> <b>24% Off</b>
      </span>
    </div>
  ));
  const { data: dataa, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="detail_cards">
      <div className="container">
        <div className="content">
          <div className="cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
