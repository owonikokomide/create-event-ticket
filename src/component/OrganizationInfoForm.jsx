import PropTypes from "prop-types";

const OrganizationInfoForm = ({ nextStep }) => {
	// Handle form submission for organization information
	const handleSubmit = (e) => {
		e.preventDefault();
		// Add logic to handle form submission (e.g., validation, data processing)
		// After validation, proceed to the next step
		nextStep();
	};

	return (
		<form className="register-ticket" onSubmit={handleSubmit}>
			<h2>Step 1: Organizer Information</h2>
			{/* Organization information form fields go here */}
			<div className="form-group">
				<label htmlFor="organizationName">Organizer Name</label>
				<input type="text" name="organizationName" required />
			</div>
			<div className="form-group">
				<label htmlFor="organizationEmail">Organizer Email</label>
				<input type="email" name="organizationEmail" required />
			</div>
			<div className="form-group">
				<label htmlFor="phoneNumber">Phone Number</label>
				<input type="tel" name="phoneNumber" required />
			</div>
			<div className="form-group-btn">
				<button className="next" type="submit">
					<span>Next</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 320 512"
					>
						<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
					</svg>
				</button>
			</div>
		</form>
	);
};

OrganizationInfoForm.propTypes = {
	nextStep: PropTypes.func.isRequired,
	darkMode: PropTypes.bool.isRequired,
	toggleMode: PropTypes.func.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
	sidebarCollapsed: PropTypes.bool.isRequired,
};

export default OrganizationInfoForm;
