// import Image from "next/image";
import React from "react";
import sneakers from "../../assets/images/adidas_snakers.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="cards">
          <div className="card">
            <h1>Adidas Men Running Sneakers</h1>
            <p>Performance and design. Taken right to the edge.</p>
            <button>shop now</button>
          </div>
          <div className="card">
            <img src={sneakers} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
