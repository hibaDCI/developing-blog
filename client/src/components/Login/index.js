import React, {useState} from "react";
import "./login.scss";
function Login({onSubmit}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div>
      <form action="" className="login" onSubmit={handleSubmit}>
        <p>"Login"</p>
        <input
          name="email"
          type="text"
          value={email}
          className="login-input"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="password"
          type="password"
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
