import { useState } from "react"; // Importing useState hook from React library
import "../css/Register.css"; // Importing CSS styles for the component
import { Link } from "react-router-dom";
// Define RegisterForm component
const RegisterForm = () => {
	// useState hook to manage form data
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
	});

	// Function to handle input changes and update formData state
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	// Render the form JSX
	return (
			<div className="all">
				<form className="register-form" onSubmit={handleSubmit}>
					<div className="logo">logo</div>
					<h1 className="reg-head">Access Exclusive Ticket Deals</h1>
					<div className="input-layout">
						<div className="input-group">
							<label>First Name</label>
							<input
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								placeholder="First Name"
								required
							/>
						</div>
						<div className="input-group">
							<label>Last Name</label>
							<input
								type="text"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								placeholder="Last Name"
								required
							/>
						</div>
						<div className="input-group">
							<label>Email</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email"
								required
							/>
						</div>
						<div className="input-group">
							<label>Password</label>
							<input
								type="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="Password"
								required
							/>
						</div>
						<div className="input-group">
							<label>Confirm Password</label>
							<input
								type="password"
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleChange}
								placeholder="Confirm Password"
								required
							/>
						</div>
						<div className="input-group">
							<label>Phone Number</label>
							<input
								type="tel"
								name="phoneNumber"
								value={formData.phoneNumber}
								onChange={handleChange}
								placeholder="Phone Number"
							/>
						</div>
					</div>
					<div className="account">
						You already have an account?
						<Link to="/login" className="sign-in">
							{" "}
							Sign in
						</Link>
					</div>
					<button type="submit">Register</button>
				</form>
			</div>
	);
};
// Export RegisterForm component
export default RegisterForm;
