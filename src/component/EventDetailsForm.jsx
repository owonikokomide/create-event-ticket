import PropTypes from "prop-types";

const EventDetailsForm = ({ nextStep, prevStep }) => {
	// Handle form submission for event details
	const handleSubmit = (e) => {
		e.preventDefault();
		// Add logic to handle form submission (e.g., validation, data processing)
		// After validation, proceed to the next step
		nextStep();
	};

	return (
		<form className="register-ticket" onSubmit={handleSubmit}>
			<h2>Step 2: Event Details</h2>
			{/* Event details form fields go here */}
			<div className="form-group">
				<label htmlFor="eventName">Event Name</label>
				<input type="text" id="eventName" name="eventName" required />
			</div>
			<div className="form-group">
				<label htmlFor="eventDate">Event Date</label>
				<input type="date" id="eventDate" name="eventDate" required />
			</div>
			<div className="form-group">
				<label htmlFor="eventTime">Event Time</label>
				<input type="time" id="eventTime" name="eventTime" required />
			</div>
			<div className="form-group">
				<label htmlFor="eventLocation">Event Location</label>
				<input type="text" id="eventLocation" name="eventLocation" required />
			</div>
			<div className="form-group">
				<label htmlFor="eventDescription">Description</label>
				<textarea id="eventDescription" name="eventDescription" required />
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

EventDetailsForm.propTypes = {
	nextStep: PropTypes.func.isRequired,
	prevStep: PropTypes.func.isRequired,
	darkMode: PropTypes.bool.isRequired,
	toggleMode: PropTypes.func.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
	sidebarCollapsed: PropTypes.bool.isRequired,
};

export default EventDetailsForm;
