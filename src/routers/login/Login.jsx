import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../api/index";

const Login = () => {
  const [username, setUsername] = useState("jimmie_k");
  const [password, setPassword] = useState("klein*#%*");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const user = { username, password };
      const res = await axios.post("/auth/login", user);
      localStorage.setItem("token", res.data.token);
      toast.success("Xush keldiz");
      navigate("/admin");
    } catch (err) {
      toast.error("Username or password is incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <br />
      <div className="siginIn Conteiner">
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <div className="single__int">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <label>Password</label>
          <div className="single__int">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btnlar">
            <button>LOGIN</button>
            <button onClick={() => navigate("/")} id="back">
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
