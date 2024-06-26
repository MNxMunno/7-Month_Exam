import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementCart,
  removeFromCart,
} from "../../context/slice/cartSlice";
import { TiDeleteOutline } from "react-icons/ti";
import PaymentModel from "../../components/payment-model/PaymentModel";
import EmptyCart from "../../components/emptyCart/EmptyCart";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [model, setModel] = useState(false);
  const data = useSelector((s) => s.cart.value);
  const dispatch = useDispatch();

  const openPayment = () => {
    setModel(true);
  };

  let totalPrice = data
    ?.reduce((acc, el) => acc + el.price * el.quantity, 0)
    .toFixed(2);

  const card = data?.map((el) => (
    <div className="card cardd" key={el.id}>
      <button onClick={() => dispatch(removeFromCart(el.id))}>
        <TiDeleteOutline style={{ color: "red", fontSize: "32px" }} />
      </button>

      <img src={el.image} alt={el.title} width={100} height={100} />
      <div className="content">
        <h3>{el.title}</h3>
        <b>${el.price}</b>

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
        <b className="quant">${totalPrice}</b>
      </div>
    </div>
  ));
  const closePayment = () => {
    setModel(false);
  };
  return (
    <section className="shopCart">
      {model ? <PaymentModel close={closePayment} /> : <> </>}
      <div className="container">
        <div className="cards">{data.length ? card : <EmptyCart />}</div>
        <div className="total">
          <div className="total__cards">
            <div className="card">
              <form>
                <input type="text" placeholder="Voucher code" />
                <button>Redeem</button>
              </form>
            </div>
            <div className="card">
              <div className="coupon">
                <h4>Subtotal</h4>
                <h4>{totalPrice}</h4>
              </div>
              <div className="coupon">
                <h4>Shipping fee</h4>
                <h4>$20</h4>
              </div>
              <div className="coupon">
                <h4>Subtotal</h4>
                <h4>No</h4>
              </div>
              <div className="totalPrice">
                <h3>Total</h3>
                <h3>$ {totalPrice}</h3>
              </div>
              <button onClick={openPayment} className="check">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
