import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import FeatureProduct from "../../components/featureProduct/FeatureProduct";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";
import LatestNews from "../../components/latestNews/LatestNews";
import Products from "../../components/product/Products";
import SearchQury from "../../components/searchQuery/SearchQury";
import { useGetProductsQuery } from "../../context/api/productApi";

const Home = () => {
  return (
    <main>
      <Hero />
      <Products />
      <Banner />
      <Info />
      <LatestNews />
      <FeatureProduct />
      <SearchQury />
    </main>
  );
};

export default Home;
