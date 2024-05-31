import React from "react";
import Cart from "../../components/cart/Cart";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const data = useSelector((s) => s.wishlist.value);
  return (
    <section className="wishlist">
      <div className="container">
        <div className="cards">
          <Cart data={data} />
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
