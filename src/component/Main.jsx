import PropTypes from "prop-types"; // Import PropTypes
import Header from "./Header";
import { Link } from "react-router-dom";

const Main = ({ toggleMode, darkMode, toggleSidebar, sidebarCollapsed }) => {
	return (
		<div className={`main ${sidebarCollapsed ? "main-expanded" : ""}`}>
			<Header
				toggleMode={toggleMode}
				darkMode={darkMode}
				toggleSidebar={toggleSidebar}
				sidebarCollapsed={sidebarCollapsed}
			/>
			<div className="main-content">
				<h3>
					Organize all your events effortlessly and ensure smooth ticket sales.
				</h3>
				<p>
					Welcome to our event management platform! Here, you can easily create
					and manage tickets for your events. Simply click the button below to
					get started.
				</p>
				<Link to="/create-ticket/registration" className="btn">
					Create Event
				</Link>
			</div>
		</div>
	);
};

// Define propTypes for the Main component
Main.propTypes = {
	toggleMode: PropTypes.func.isRequired, // toggleMode should be a function and is required
	darkMode: PropTypes.bool.isRequired, // darkMode should be a boolean and is required
	toggleSidebar: PropTypes.func.isRequired, // toggleSidebar should be a function and is required
	sidebarCollapsed: PropTypes.bool.isRequired, // sidebarCollapsed should be a boolean and is required
};

export default Main;
