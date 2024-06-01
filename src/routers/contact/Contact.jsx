import React, { useState, memo } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const BOT_TOKEN = "7170154053:AAH2GUqkkxH_hbnj5L0juncFcn-qeiJDozk";
const CHAT_ID = "-1002016436113";
const USER_ID = "6339437164";

//  https://api.telegram.org/bot7170154053:AAH2GUqkkxH_hbnj5L0juncFcn-qeiJDozk/getUpdates
//  https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Contact = () => {
  const [contactData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
      Name: ${contactData.name}
      Email: ${contactData.email}
      Message: ${contactData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Message sent successfully!", {});
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Response error:", data);
        toast.error(`Failed to send message: ${data.description}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message.", {});
    }
  };

  return (
    <section className="contact">
      <div className="container ">
        <div className="content">
          <div className="img" style={{ background: "#40BFFF" }}>
            <div className="text">
              <h3>Get in touch</h3>
              <p>contact@e-comm.ng</p>
              <p>+234 4556 6665 34</p>
              <p>
                20 Prince Hakerem Lekki <br /> Phase 1, Lagos.
              </p>
            </div>
          </div>

          <form className="from_contact" onSubmit={handleSubmit}>
            <div className="form_item">
              <label>Fullname</label>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={contactData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_item">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={contactData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_item">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Type your message"
                value={contactData.message}
                onChange={handleChange}
                required
                rows={4}
                cols={34}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>

        <form className="search">
          <input type="text" placeholder="Search query..." />
          <button>Search</button>
        </form>
      </div>
    </section>
  );
};

export default memo(Contact);
