import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlus,
	faTasks,
	faChartLine,
	faChartBar,
	faUser,
	faPowerOff,
	faQuestionCircle,
	faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen }) => {
	return (
		<div className={`sidebar ${isOpen ? "" : "sidebar-collapsed"}`}>
			<div className="sidebar-logo">logo</div>
			<div className="nav-links">
				<Link to="/dashboard" className="nav-link">
					<FontAwesomeIcon icon={faChartBar} />{" "}
					<span className={isOpen ? "" : "hidden-text"}>Dashboard</span>
				</Link>
				<Link to="/create-ticket" className="nav-link">
					<FontAwesomeIcon icon={faPlus} />{" "}
					<span className={isOpen ? "" : "hidden-text"}>Create Ticket</span>
				</Link>
				<Link to="/organizer" className="nav-link">
					<FontAwesomeIcon icon={faTasks} /> <span>Organizer</span>
				</Link>
				<Link to="/profile" className="nav-link">
					<FontAwesomeIcon icon={faUser} />{" "}
					<span className={isOpen ? "" : "hidden-text"}>Profile</span>
				</Link>

				<Link to="/tickets" className="nav-link">
					<FontAwesomeIcon icon={faTicketAlt} /> <span>Tickets</span>
				</Link>
				<Link to="/analytics" className="nav-link">
					<FontAwesomeIcon icon={faChartLine} /> <span>Analytics</span>
				</Link>
				<Link to="/help" className="nav-link">
					<FontAwesomeIcon icon={faQuestionCircle} />{" "}
					<span>Help and Support</span>
				</Link>
				<button className="logout-button">
					<FontAwesomeIcon icon={faPowerOff} /> <span>Logout</span>
				</button>
			</div>
		</div>
	);
};

// Define propTypes for the Sidebar component
Sidebar.propTypes = {
	isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required
};

export default Sidebar;
