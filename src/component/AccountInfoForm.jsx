import PropTypes from "prop-types";

const AccountInfoForm = ({ prevStep, toggleModal }) => {
	// Handle form submission for account information
	const handleSubmit = (e) => {
		e.preventDefault();
		// Add logic to handle form submission (e.g., sending data to backend)
		toggleModal();
	};

	return (
		<form className="register-ticket" onSubmit={handleSubmit}>
			<h2>Step 3: Account Information</h2>
			{/* Account information form fields go here */}
			<div className="form-group">
				<label htmlFor="accountNumber">Account Number</label>
				<input type="text" id="accountNumber" name="accountNumber" required />
			</div>
			<div className="form-group">
				<label htmlFor="bank">Bank</label>
				<select id="bank" name="bank" required>
					<option value="">Select Bank</option>
					<option value="uba">UBA</option>
					<option value="gtb">GTB</option>
					<option value="access">Access Bank</option>
					{/* Add more options as needed */}
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="accountName">Account Name</label>
				<input type="text" id="accountName" name="accountName" required />
			</div>

			<div className="form-group-btn">
				<button className="prev" type="button" onClick={prevStep}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 320 512"
					>
						<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
					</svg>
					<span>Back</span>
				</button>
				<button className="submitBtn" type="submit">
					Submit
					<svg
						fill="white"
						viewBox="0 0 448 512"
						height="1em"
						className="arrow"
					>
						<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
					</svg>
				</button>
			</div>
		</form>
	);
};

AccountInfoForm.propTypes = {
	prevStep: PropTypes.func.isRequired,
	darkMode: PropTypes.bool.isRequired,
	toggleMode: PropTypes.func.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
	sidebarCollapsed: PropTypes.bool.isRequired,
	toggleModal: PropTypes.func.isRequired,
};

export default AccountInfoForm;
