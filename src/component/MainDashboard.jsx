import Header from "./Header"
import PropTypes from "prop-types"; 
const MainDashboard = ({ toggleMode, darkMode, toggleSidebar, sidebarCollapsed }) => {
  return (
    <div className={`main ${sidebarCollapsed ? "main-expanded" : ""}`}>
			<Header
				toggleMode={toggleMode}
				darkMode={darkMode}
				toggleSidebar={toggleSidebar}
				sidebarCollapsed={sidebarCollapsed}
			/>
            <div className="main-content">
                Dashboard
            </div>
    </div>
  )
}

MainDashboard.propTypes = {
	toggleMode: PropTypes.func.isRequired, // toggleMode should be a function and is required
	darkMode: PropTypes.bool.isRequired, // darkMode should be a boolean and is required
	toggleSidebar: PropTypes.func.isRequired, // toggleSidebar should be a function and is required
	sidebarCollapsed: PropTypes.bool.isRequired, // sidebarCollapsed should be a boolean and is required
};

export default MainDashboard