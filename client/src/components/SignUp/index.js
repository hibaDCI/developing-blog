import React, {useState} from "react";
import "./signup.scss";
function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(email, password);
  };
  return (
    <div>
      <form action="" className="signup" onSubmit={handleSubmit}>
        <p>"Sign Up"</p>
        <input
          className="signup-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signup-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
