import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decrementCart,
} from "../../context/slice/cartSlice";
import { useParams } from "react-router-dom";

const DetailWrapper = ({ data }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const card = data?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.image} alt="img" />
      <div className="content">
        <h3>{el.title}</h3>
        <p>{el.description}</p>
        <p>$ {el.price}</p>
        <del>$ {el.price * 2}</del>
        <div className="btns">
          <button
            disabled={el.quantity <= 1}
            onClick={() => dispatch(decrementCart(el))}
          >
            -
          </button>
          <span>{el.quantity}</span>
          <button onClick={() => dispatch(addToCart(el))}>+</button>
        </div>
        <button onClick={() => dispatch(removeFromCart(el.id))}>delete</button>
      </div>
    </div>
  ));
  return (
    <section className="detailWrapper">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default DetailWrapper;
