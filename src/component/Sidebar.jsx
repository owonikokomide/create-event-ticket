import PropTypes from "prop-types"; // Import PropTypes
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlus,
	faInfoCircle,
	faTools,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen }) => {
	return (
		<div className={`sidebar ${isOpen ? "" : "sidebar-collapsed"}`}>
			<div className="sidebar-logo">logo</div>
			<div className="nav-links">
				<Link to="/create-ticket" className="nav-link">
					<FontAwesomeIcon icon={faPlus} />{" "}
					<span className={isOpen ? "" : "hidden-text"}>Create Ticket</span>
				</Link>
				<Link to="/create-ticket" className="nav-link">
					<FontAwesomeIcon icon={faInfoCircle} />{" "}
					<span className={isOpen ? "" : "hidden-text"}>About</span>
				</Link>
				<Link to="/create-ticket" className="nav-link">
					<FontAwesomeIcon icon={faTools} />{" "}
					<span className={isOpen ? "" : "hidden-text"}>Services</span>
				</Link>
			</div>
		</div>
	);
};

// Define propTypes for the Sidebar component
Sidebar.propTypes = {
	isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required
};

export default Sidebar;
