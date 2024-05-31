// import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.svg";
import img from "../../assets/images/cart_pay.png";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Infomation",
      text1: "About Us",
      text2: "Infomation ",
      text3: "Privacy Policy",
      text4: "Terms & Conditions",
    },
    {
      id: 2,
      title: "Service",
      text1: "About Us",
      text2: "Infomation ",
      text3: "Privacy Policy",
      text4: "Terms & Conditions",
    },
    {
      id: 3,
      title: "My Account",
      text1: "About Us",
      text2: "Infomation ",
      text3: "Privacy Policy",
      text4: "Terms & Conditions",
    },
    {
      id: 4,
      title: "Our Offers",
      text1: "About Us",
      text2: "Infomation ",
      text3: "Privacy Policy",
      text4: "Terms & Conditions",
    },
  ];

  let card = data?.map((el) => (
    <div key={el.id}>
      <h3>{el.title}</h3>
      <p>{el.text1}</p>
      <p>{el.text2}</p>
      <p>{el.text3}</p>
      <p>{el.text4}</p>
    </div>
  ));

  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="first__cards">
            <div className="footer__card">
              <img src={logo} alt="logo" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
            <div className="footer__card">
              <h2>Follow Us</h2>
              <p className="folow">
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
            </div>
            <div className="footer__card">
              <h2>Contact Us</h2>
              <p className="com">
                E-Comm , 4578 Marmora Road, Glasgow D04 89GR
              </p>
            </div>
          </div>
          <div className="second__cards">{card}</div>
          <div className="line"></div>
          <div className="third__cards">
            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
