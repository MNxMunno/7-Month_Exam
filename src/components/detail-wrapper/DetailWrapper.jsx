import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decrementCart,
} from "../../context/slice/cartSlice";
import { useParams } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetDetailProductsQuery,
} from "../../context/api/productApi";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { toggleHeart } from "../../context/slice/wishlist";

const DetailWrapper = () => {
  const wishlist = useSelector((s) => s.wishlist.value);
  const { id } = useParams();
  const { data, isLoading } = useGetDetailProductsQuery(id);
  const dispatch = useDispatch();
  console.log(data);

  return (
    <section className="detailWrapper">
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src={data?.image} alt={data?.title} width={100} height={100} />
            <div className="img__content">
              <img
                className="imgg"
                src={data?.image}
                alt={data?.title}
                width={85}
                height={85}
              />
              <img
                className="imgg"
                src={data?.image}
                alt={data?.title}
                width={85}
                height={85}
              />
              <img
                className="imgg"
                src={data?.image}
                alt={data?.title}
                width={85}
                height={85}
              />
              <img
                className="imgg"
                src={data?.image}
                alt={data?.title}
                width={85}
                height={85}
              />
            </div>
          </div>
          <div className="cart">
            <h3>{data?.title}</h3>
            <p className="star">⭐⭐⭐⭐⭐</p>
            <span className="price">
              $ {data?.price} <del>$ {data?.price * 1.25}</del> <b>24% Off</b>
            </span>
            <div className="info_detail">
              <span>
                Category:{""}
                <b> {data?.category}</b>
              </span>
              <span>
                Rating:{""}
                <b> {data?.rating?.rate}</b>
              </span>
              <span>
                Count:{""}
                <b> {data?.rating?.count}</b>
              </span>
            </div>
            <div className="color"></div>
            <div className="btns">
              <button onClick={() => dispatch(addToCart(data))}>
                <FaCartPlus />
                Add To Cart
              </button>
              <button onClick={() => dispatch(toggleHeart(data))}>
                {wishlist?.some((item) => item.id === data?.id) ? (
                  <FaHeart style={{ color: "red" }} />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
          <div className="second_cart">
            <img src={data?.image} alt="img" width={100} height={100} />
            <p>⭐⭐⭐⭐⭐</p>{" "}
            <span>
              ${data?.price} <del>$ {data?.price * 1.5}</del>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailWrapper;
