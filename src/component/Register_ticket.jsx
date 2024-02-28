import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Header from "./Header";
import OrganizationInfoForm from "./OrganizationInfoForm";
import EventDetailsForm from "./EventDetailsForm";
import AccountInfoForm from "./AccountInfoForm";
import '../css/RegisterTicket.css'
import Modal from "./Modal";

const Register_ticket = ({
	toggleMode,
	darkMode,
	toggleSidebar,
	sidebarCollapsed,
}) => {
	const [step, setStep] = useState(1); // State to manage form steps
	const [showModal, setShowModal] = useState(false); // State to manage modal visibility

	const nextStep = () => {
		setStep((prevStep) => prevStep + 1);
	};

	const prevStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	// Render form based on the current step
	const renderFormStep = () => {
		switch (step) {
			case 1:
				return (
					<OrganizationInfoForm
						nextStep={nextStep}
						darkMode={darkMode}
						toggleMode={toggleMode}
						toggleSidebar={toggleSidebar}
						sidebarCollapsed={sidebarCollapsed}
					/>
				);
			case 2:
				return (
					<EventDetailsForm
						nextStep={nextStep}
						prevStep={prevStep}
						darkMode={darkMode}
						toggleMode={toggleMode}
						toggleSidebar={toggleSidebar}
						sidebarCollapsed={sidebarCollapsed}
					/>
				);
			case 3:
				return (
					<AccountInfoForm
						prevStep={prevStep}
						darkMode={darkMode}
						toggleMode={toggleMode}
						toggleSidebar={toggleSidebar}
						sidebarCollapsed={sidebarCollapsed}
						toggleModal={toggleModal} // Pass toggleModal function to AccountInfoForm
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div className={`main ${sidebarCollapsed ? "main-expanded" : ""}`}>
			<Header
				toggleMode={toggleMode}
				darkMode={darkMode}
				toggleSidebar={toggleSidebar}
				sidebarCollapsed={sidebarCollapsed}
			/>
			<div className="main-content">
				<div className="content">
					<h3>Welcome to our event registration!</h3>
					<p>Please fill out the following form to register for the event.</p>
					{/* Render the form based on the current step */}
					{renderFormStep()}
				</div>
			</div>
			{/* Render the modal if showModal is true */}
			{showModal && <Modal closeModal={toggleModal} />}
		</div>
	);
};

Register_ticket.propTypes = {
	toggleMode: PropTypes.func.isRequired,
	darkMode: PropTypes.bool.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
	sidebarCollapsed: PropTypes.bool.isRequired,
};

export default Register_ticket;