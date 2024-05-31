// import img from "next/image";
import React from "react";

const FeatureProduct = () => {
  const data = [
    {
      id: 1,
      title: "Blue Swade Nike Sneakers",
      price: "499",
      action: "599",
      img: "https://i.postimg.cc/mDZqrTfg/blue-swade.png",
    },
    {
      id: 2,
      title: "Blue Swade Nike Sneakers",
      price: "499",
      action: "599",
      img: "https://i.postimg.cc/mDZqrTfg/blue-swade.png",
    },
    {
      id: 3,
      title: "Blue Swade Nike Sneakers",
      price: "499",
      action: "599",
      img: "https://i.postimg.cc/mDZqrTfg/blue-swade.png",
    },
  ];
  const card = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt={el.title} />
      <div className="content">
        <h3>{el.title}</h3>
        <p className="star">⭐⭐⭐⭐⭐</p>
        <p className="price">$ {el.price}</p>
        <del>$ {el.action}</del>
      </div>
    </div>
  ));
  return (
    <section className="feature">
      <div className="container">
        <div className="content">
          <h1>FEATURED PRODUCTS</h1>
          <div className="cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
