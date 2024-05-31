import React, { useState } from "react";
import axios from "../../api/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [password, setPassword] = useState("klein*#%*");
  const [username, setUsername] = useState("jimmie_k");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginIn = async (event) => {
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
    <section className="login">
      <div className="container">
        <div className="content">
          <form onSubmit={handleLoginIn}>
            <div className="form_item">
              <label className="label">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form_item">
              <label className="label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button>LOGIN</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
