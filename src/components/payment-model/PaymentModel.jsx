import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCart } from "../../context/slice/cartSlice";
import { MdOutlineClose } from "react-icons/md";
const BOT_TOKEN = "7170154053:AAH2GUqkkxH_hbnj5L0juncFcn-qeiJDozk";
const CHAT_ID = "-1002016436113";
const USER_ID = "6339437164";

//  https://api.telegram.org/bot7170154053:AAH2GUqkkxH_hbnj5L0juncFcn-qeiJDozk/getUpdates
//  https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

let initialState = {
  fname: "",
  lname: "",
  tel: "",
  desc: "",
};

const PaymentModel = ({ close }) => {
  const carts = useSelector((s) => s.cart.value);
  console.log(carts);
  const dispatch = useDispatch();
  let [data, setData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Buyurtma %0A%0A";
    text += `Ismi:  ${data.fname} %0A%0A`;
    text += `Familya:  ${data.lname} %0A%0A`;
    text += `Telefon:  ${data.tel} %0A%0A`;
    text += `Izoh:  ${data.desc} %0A%0A`;

    carts?.forEach((product) => {
      text += `Nomi:  ${product.title} %0A`;
      text += `Miqdori:  ${product.quantity} %0A`;
      text += `Narxi:  ${product.price} %0A%0A`;
    });
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setData(initialState);

    dispatch(deleteAllCart());
    dispatch(close());
  };
  return (
    <section className="inputs">
      <div className="container">
        <div className="content">
          <button onClick={close}>
            <MdOutlineClose style={{ color: "red", fontSize: "32px" }} />
          </button>
          <form onSubmit={handleSubmit} action="">
            <input
              required
              value={data.fname}
              onChange={(e) =>
                setData((p) => ({ ...p, fname: e.target.value }))
              }
              type="text"
              placeholder="First Name"
            />
            <input
              required
              value={data.lname}
              onChange={(e) =>
                setData((p) => ({ ...p, lname: e.target.value }))
              }
              type="text"
              placeholder="Last Name"
            />
            <input
              required
              value={data.tel}
              onChange={(e) => setData((p) => ({ ...p, tel: e.target.value }))}
              type="email"
              placeholder="Email Address"
            />
            <textarea
              required
              value={data.desc}
              onChange={(e) => setData((p) => ({ ...p, desc: e.target.value }))}
              name="text"
              id="text"
              rows="4"
              cols="40"
              placeholder="Address for Delivery"
            ></textarea>
            <button>Go to Payment</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PaymentModel;
