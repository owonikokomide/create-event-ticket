// added the css file
import "./App.css";
// adding the components for changing pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterForm from "./pages/Register";
import Signin from "./pages/Signin";
import Create_ticket from "./pages/Create_ticket";
import Ticket_registration from "./pages/Ticket_registration";
import Axiospost from "./component/Axiospost";
import Design_Ticket from "./pages/Design_Ticket";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/register" element={<RegisterForm />} />
				<Route path="/login" element={<Signin />} />
				<Route path="/create-ticket" element={<Create_ticket />} />
				<Route
					path="/create-ticket/registration"
					element={<Ticket_registration />}
				/>
				<Route path="/axios" element={<Axiospost />} />
				<Route path="/design-ticket" element={<Design_Ticket />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
