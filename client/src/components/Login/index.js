import React, {useState} from "react";
import "./login.scss";
import axios from "axios";

import {useNavigate} from "react-router-dom";
function Login() {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const onSubmitHandle = async () => {
    console.log("hello");
    await axios({
      method: "POST",
      url: "/users/login",
      data: {password, email},
    })
      .then((res) => {
        console.log(res, "res");
        // navigate("/dashboard")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitHandle();
  };

  return (
    <div>
      <form action="" className="login" onSubmit={handleSubmit}>
        <p>"Login"</p>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          className="login-input"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login In</button>
      </form>
    </div>
  );
}

export default Login;
