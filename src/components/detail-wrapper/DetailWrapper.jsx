import React from "react";
import { useDispatch } from "react-redux";
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

const DetailWrapper = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetDetailProductsQuery(id);
  const dispatch = useDispatch();
  console.log(data);

  return (
    <section className="detailWrapper">
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src={data?.image} alt="img" />
            <div className="content">
              <h3>{data?.title}</h3>
              <p>{data?.description}</p>
              <p>$ {data?.price}</p>
              <del>$ {data?.price * 2}</del>
              <div className="btns">
                <button
                  disabled={data?.quantity <= 1}
                  onClick={() => dispatch(decrementCart(data))}
                >
                  -
                </button>
                <span>{data?.quantity}</span>
                <button onClick={() => dispatch(addToCart(data))}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailWrapper;
