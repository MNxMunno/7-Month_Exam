import React from "react";

const LatestNews = () => {
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/L8NB4HyX/nike.png",
      title: "Fashion Industry",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01 Jan, 2015",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/RhdQ34MX/figma.png",
      title: "Best Design Tools",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01 Jan, 2015",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/7h50L7WY/kronos.png",
      title: "HR Community",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "01 Jan, 2015",
    },
  ];
  const card = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt={el.title} />
      <div className="content">
        <span>{el.date}</span>
        <h3>{el.title}</h3>
        <p>{el.description}</p>
      </div>
    </div>
  ));
  return (
    <section className="latest">
      <div className="container">
        <div className="content">
          <h1>latest news</h1>
          <div className="cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
