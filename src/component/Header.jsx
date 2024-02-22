import PropTypes from "prop-types"; // Import PropTypes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleMode, darkMode, toggleSidebar}) => {
	return (
		<header>
			<span className="menu-icon" onClick={toggleSidebar}>
				<FontAwesomeIcon icon={faBars} />
			</span>
			Header
			<label className="switch">
				<input type="checkbox" checked={darkMode} onChange={toggleMode} />
				<span className="slider round"></span>
			</label>
		</header>
	);
};

// Define propTypes for the Header component
Header.propTypes = {
	toggleMode: PropTypes.func.isRequired, // toggleMode should be a function and is required
	darkMode: PropTypes.bool.isRequired, // darkMode should be a boolean and is required
	toggleSidebar: PropTypes.func.isRequired, // toggleSidebar should be a function and is required
	sidebarCollapsed: PropTypes.bool.isRequired, // sidebarCollapsed should be a boolean and is required
};

export default Header;
