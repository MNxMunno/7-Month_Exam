import { useSelector } from "react-redux";
import DetailWrapper from "../../components/detail-wrapper/DetailWrapper";
// import { getData } from "@/fetch";
import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";

const Detail = () => {
  // const carts = useSelector((s) => s.cart.value);
  const { data, isLoading } = useGetProductsQuery();
  console.log(isLoading);

  return <div>{isLoading ? "loading..." : <DetailWrapper data={data} />}</div>;
};

export default Detail;
