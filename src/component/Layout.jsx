// Layout.js
import PropTypes from "prop-types"; // Import PropTypes
import { useState, useEffect } from "react";
import Sidebar from "../component/Sidebar";
// import Main from "../component/Main";
import Cookies from "js-cookie"; // Import Cookies

const Layout = ({ MainComponent }) => {
const [darkMode, setDarkMode] = useState(false);
const [sidebarOpen, setSidebarOpen] = useState(true);

useEffect(() => {
	// Retrieve mode preference from cookie when component mounts
	const mode = Cookies.get("mode");
	if (mode === "dark") {
		setDarkMode(true);
	} else if (mode === "light") {
		setDarkMode(false);
	}

	// Set up event listener for screen width changes
	const mediaQuery = window.matchMedia("(max-width: 768px)");
	const handleMediaQueryChange = (e) => {
		setSidebarOpen(!e.matches); // Set sidebarOpen based on screen width
	};
	handleMediaQueryChange(mediaQuery);
	mediaQuery.addEventListener("change", handleMediaQueryChange);
	return () => {
		mediaQuery.removeEventListener("change", handleMediaQueryChange);
	};
}, []);

const toggleMode = () => {
	// Toggle darkMode state
	setDarkMode((prevMode) => !prevMode);

	// Update cookie with mode preference
	Cookies.set("mode", darkMode ? "light" : "dark", { expires: 365 });
};

const toggleSidebar = () => {
	setSidebarOpen((prevOpen) => !prevOpen);
};

	return (
		<div className={darkMode ? "App dark-mode" : "App light-mode"}>
			<Sidebar isOpen={sidebarOpen} />
			<MainComponent
				toggleMode={toggleMode}
				darkMode={darkMode}
				toggleSidebar={toggleSidebar}
				sidebarCollapsed={!sidebarOpen}
			/>
		</div>
	);
};

// Define propTypes for the Header component
Layout.propTypes = {
	MainComponent: PropTypes.func.isRequired, // toggleMode should be a function and is required
};

export default Layout;
