import React from "react";
// import "./admin.scss";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <section className="admin">
      <div className="container">
        {/* <div className="admin__nav">
          <Link to="/" className="admina">
            Home
          </Link>
          <Link to="/Contact" className="admina">
            Contact Us
          </Link>
        </div> */}
        <h2>Admin panel</h2>
        <div className="cards">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
        </div>
        <button className="admin__button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </section>
  );
};

export default Admin;
