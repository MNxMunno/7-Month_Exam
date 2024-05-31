import { useSelector } from "react-redux";
import DetailWrapper from "../../components/detail-wrapper/DetailWrapper";
// import { getData } from "@/fetch";
import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Cart from "../../components/cart/Cart";
import Products from "../../components/product/Products";

const Detail = () => {
  // const carts = useSelector((s) => s.cart.value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data, isLoading } = useGetProductsQuery({
    params: { limit: 4 },
    path: "/",
  });
  console.log(data);
  // console.log(isLoading);

  return (
    <section className="detail">
      <div className="container">
        {isLoading ? "loading..." : <DetailWrapper data={data} />}
        <div className="content">
          <h3>RELATED PRODUCTS</h3>
        </div>
        <Cart data={data} />
      </div>
    </section>
  );
};

export default Detail;
