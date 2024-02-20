import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css"; // Importing CSS styles for the component
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login (replace this with actual authentication logic)
    if (email === "admin" && password === "password") {
      // Successful login
      alert("Login successful!");
      navigate("/home");
    } else {
      // Failed login
      setError("Invalid username or password");
    }
  };

  return (
    <form className="register-form" onSubmit={handleLogin}>
      <div className="logo">logo</div>
      <h1 className="reg-head">
        Welcome back! <br /> Login to manage your ticket transactions.
      </h1>
      {error && <p className="error">{error}</p>}
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <div className="account">
        Are you new?
        <Link to="/register" className="sign-in">
          {" "}
          Register
        </Link>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Signin;
