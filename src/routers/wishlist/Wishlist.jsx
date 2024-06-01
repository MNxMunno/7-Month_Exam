import React, { useEffect } from "react";
import Cart from "../../components/cart/Cart";
import { useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";

const Wishlist = () => {
  const data = useSelector((s) => s.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="wishlist">
      <div className="container">
        <div className="cards">
          {data.length ? <Cart data={data} /> : <Empty />}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
