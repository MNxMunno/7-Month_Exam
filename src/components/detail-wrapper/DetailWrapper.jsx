import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decrementCart,
} from "../../context/slice/cartSlice";
import { Link, useParams } from "react-router-dom";
import { useGetDetailProductsQuery } from "../../context/api/productApi";
import {
  FaCartPlus,
  FaFacebookF,
  FaHeart,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa";
import { toggleHeart } from "../../context/slice/wishlist";

const DetailWrapper = () => {
  const quant = useSelector((s) => s.cart.value);
  const wishlist = useSelector((s) => s.wishlist.value);
  const { id } = useParams();
  const { data, isLoading } = useGetDetailProductsQuery(id);
  const dispatch = useDispatch();

  return (
    <section className="detailWrapper">
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
          <p className="star">
            ⭐⭐⭐⭐⭐ <b>0 reviews</b>{" "}
            <b className="submit_text">Submit a review</b>
          </p>
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
          <div className="color">
            <h4>Select Color:</h4>
            <div className="color__btns">
              <div className="color__btn blue"></div>
              <div className="color__btn red"></div>
              <div className="color__btn black"></div>
              <div className="color__btn yellow"></div>
            </div>
          </div>
          <div className="size">
            <h4>Size</h4>
            <select name="size" id="size">
              <option value="xxxl">XXXL</option>
              <option value="xxl">XXL</option>
              <option value="xl">XL</option>
              <option value="xs">XS</option>
              <option value="x">X</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="s">S</option>
            </select>
          </div>
          <div className="btns">
            <div className="count">
              <button
                disabled={data?.quantity <= 1}
                onClick={() => dispatch(decrementCart(data))}
              >
                -
              </button>
              <span>2</span>
              <button onClick={() => dispatch(addToCart(data))}>+</button>
            </div>
            <div className="btn">
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
          <div className="links">
            <Link
              className="facebook"
              target="_blank"
              to={"https://www.facebook.com"}
            >
              <FaFacebookF /> Share on Facebook
            </Link>
            <Link className="twitter" target="_blank" to={"https://x.com"}>
              <FaTwitter /> Share on Twitter
            </Link>
          </div>
        </div>
        <div className="second_cart">
          <h3>Best seller</h3>
          <img src={data?.image} alt="img" width={100} height={100} />
          <p>⭐⭐⭐⭐⭐</p>
          <span>
            ${data?.price} <del>$ {data?.price * 1.5}</del>
          </span>
        </div>
      </div>
    </section>
  );
};

export default DetailWrapper;
