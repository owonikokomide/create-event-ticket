import Header from "./Header"
import PropTypes from "prop-types"; 
import CreateEvent from "./sub-component/CreateEvent";
import MyEvents from "./sub-component/MyEvents";
import AccountSettings from "./sub-component/AccountSettings";
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
				<CreateEvent />
				<MyEvents />
				<AccountSettings />
				<footer className="footer">
					<div className="contact-info">
						Contact: support@eventticketapp.com
					</div>
					<div className="legal-links">
						<a href="#">Terms of Service</a>
						<a href="#">Privacy Policy</a>
					</div>
				</footer>
			</div>
		</div>
	);
}

MainDashboard.propTypes = {
	toggleMode: PropTypes.func.isRequired, // toggleMode should be a function and is required
	darkMode: PropTypes.bool.isRequired, // darkMode should be a boolean and is required
	toggleSidebar: PropTypes.func.isRequired, // toggleSidebar should be a function and is required
	sidebarCollapsed: PropTypes.bool.isRequired, // sidebarCollapsed should be a boolean and is required
};

export default MainDashboard