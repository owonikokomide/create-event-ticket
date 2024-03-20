/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
	const History = useNavigate();

	const handleRedirect = () => {
		History("/create-ticket/registration");
	};
	return (
		<section className="event-creation-section">
			<h2>Create New Event</h2>
			<p>Click the button below to start creating your event.</p>
			<button onClick={handleRedirect}>Create Event</button>
			{/* Event details form */}
			{/* Ticket customization options */}
			{/* Preview option */}
		</section>
	);
};

export default CreateEvent;
