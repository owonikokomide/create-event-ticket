import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Header from "./Header";
import OrganizationInfoForm from "./OrganizationInfoForm";
import EventDetailsForm from "./EventDetailsForm";
import AccountInfoForm from "./AccountInfoForm";
import '../css/RegisterTicket.css'

const Register_ticket = ({
  toggleMode,
  darkMode,
  toggleSidebar,
  sidebarCollapsed,
}) => {
  const [step, setStep] = useState(1); // State to manage form steps

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
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
        <h3>Welcome to our event registration!</h3>
        <p>Please fill out the following form to register for the event.</p>
        {/* Render the form based on the current step */}
        {renderFormStep()}
      </div>
    </div>
  );
};

Register_ticket.propTypes = {
  toggleMode: PropTypes.func.isRequired, // toggleMode should be a function and is required
  darkMode: PropTypes.bool.isRequired, // darkMode should be a boolean and is required
  toggleSidebar: PropTypes.func.isRequired, // toggleSidebar should be a function and is required
  sidebarCollapsed: PropTypes.bool.isRequired, // sidebarCollapsed should be a boolean and is required
};

export default Register_ticket;
