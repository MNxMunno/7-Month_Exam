// import Image from "next/image";
import React from "react";

const Info = () => {
  const data = [
    {
      id: 1,
      image: "https://i.postimg.cc/FzHmz6vR/dilever.png",
      title: "FREE SHIPPING",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/L6h2MGvQ/refund.png",
      title: "100% REFUND",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/9FSVX1nm/support.png",
      title: "SUPPORT 24/7",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  const card = data?.map((item) => (
    <div className="card" key={item.id}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  ));
  return (
    <section className="info">
      <div className="container">
        <div className="cards">{card}</div>
      </div>
    </section>
  );
};

export default Info;
