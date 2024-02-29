import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "../css/Register.css"; // Importing CSS styles for the component
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login (replace this with actual authentication logic)
    if (email === "admin@gmail.com" && password === "password") {
      // Successful login
      alert("Login successful!");
      navigate("/create-ticket");
    } else {
      // Failed login
      setError("Invalid username or password");
    }
  };

  return (
		<GoogleOAuthProvider clientId="718381774134-fk8afu4iikesda9ii3lbf3fro26q5fct.apps.googleusercontent.com">
			<div className="all">
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
					or
					<div className="google-login-button">
						<GoogleLogin
							text="Sign up with Google"
							onSuccess={(credentialResponse) => {
								const decoded = jwtDecode(credentialResponse?.credential);
								console.log(decoded);
							}}
							onError={() => {
								console.log("Login Failed");
							}}
						/>
					</div>
				</form>
			</div>
		</GoogleOAuthProvider>
	);
};

export default Signin;
