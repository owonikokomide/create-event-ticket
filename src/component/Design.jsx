import PropTypes from "prop-types"; // Import PropTypes
import Header from "./Header";
import { useState } from "react";
import "../css/DesignTicket.css";

const Design = ({ toggleMode, darkMode, toggleSidebar, sidebarCollapsed }) => {
	const [backgroundColorType, setBackgroundColorType] = useState("plain");
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");
	const [gradientStartColor, setGradientStartColor] = useState("#ffffff");
	const [gradientEndColor, setGradientEndColor] = useState("#000000");

	// State and handlers for Event Name
	const [eventNameFontSize, setEventNameFontSize] = useState(24);
	const [eventNameFontStyle, setEventNameFontStyle] = useState("normal");
	const [eventNameFontWeight, setEventNameFontWeight] = useState("bold");
	const [eventNameColor, setEventNameColor] = useState("#000000");

	// State and handlers for Date
	const [dateFontSize, setDateFontSize] = useState(16);
	const [dateFontStyle, setDateFontStyle] = useState("italic");
	const [dateFontWeight, setDateFontWeight] = useState("normal");
	const [dateColor, setDateColor] = useState("#000000");

	// State and handlers for Location
	const [locationFontSize, setLocationFontSize] = useState(16);
	const [locationFontStyle, setLocationFontStyle] = useState("normal");
	const [locationFontWeight, setLocationFontWeight] = useState("normal");
	const [locationColor, setLocationColor] = useState("#000000");

	// State and handlers for Time
	const [timeFontSize, setTimeFontSize] = useState(16);
	const [timeFontStyle, setTimeFontStyle] = useState("normal");
	const [timeFontWeight, setTimeFontWeight] = useState("normal");
	const [timeColor, setTimeColor] = useState("#000000");

	function toggleBackgroundColorOptions(e) {
		setBackgroundColorType(e.target.value);
	}

	function handleBackgroundColorChange(e) {
		setBackgroundColor(e.target.value);
	}

     function handleGradientStartColorChange(e) {
				setGradientStartColor(e.target.value);
			}

			function handleGradientEndColorChange(e) {
				setGradientEndColor(e.target.value);
			}
	function generateTicket() {
		// Generate ticket logic
		const ticketPreview = document.getElementById("ticketPreview");

		ticketPreview.innerHTML = `
            <h1 style="font-size: ${eventNameFontSize}px; color: ${eventNameColor}; font-weight: ${eventNameFontWeight}; font-style: ${eventNameFontStyle};">Event Name: 50th Birthday Party</h1>
            <p style="font-size: ${dateFontSize}px; color: ${dateColor}; font-weight: ${dateFontWeight}; font-style: ${dateFontStyle};">Date: February 20, 2024</p>
            <p style="font-size: ${locationFontSize}px; color: ${locationColor}; font-weight: ${locationFontWeight}; font-style: ${locationFontStyle};">Location: 120, Adekunle Fajuyi Road</p>
            <p style="font-size: ${timeFontSize}px; color: ${timeColor}; font-weight: ${timeFontWeight}; font-style: ${timeFontStyle};">Time: 8:00 PM</p>
        `;

		if (backgroundColorType === "plain") {
			ticketPreview.style.backgroundColor = backgroundColor;
		} else if (backgroundColorType === "gradient") {
			ticketPreview.style.background = `linear-gradient(to bottom, ${gradientStartColor}, ${gradientEndColor})`;
		}
	}

	return (
		<div className={`main ${sidebarCollapsed ? "main-expanded" : ""}`}>
			<Header
				toggleMode={toggleMode}
				darkMode={darkMode}
				toggleSidebar={toggleSidebar}
				sidebarCollapsed={sidebarCollapsed}
			/>
			<div className="main-content">
				<div className="design">
					<div className="options">
						<label htmlFor="backgroundColorType">Background Type:</label>
						<select
							id="backgroundColorType"
							value={backgroundColorType}
							onChange={toggleBackgroundColorOptions}
						>
							<option value="plain">Plain</option>
							<option value="gradient">Gradient</option>
						</select>
						{backgroundColorType === "gradient" && (
							<div>
								<label htmlFor="gradientStartColor">
									Gradient Start Color:
								</label>
								<input
									type="color"
									id="gradientStartColor"
									value={gradientStartColor}
									onChange={handleGradientStartColorChange}
								/>
								<label htmlFor="gradientEndColor">Gradient End Color:</label>
								<input
									type="color"
									id="gradientEndColor"
									value={gradientEndColor}
									onChange={handleGradientEndColorChange}
								/>
							</div>
						)}
						{backgroundColorType === "plain" && (
							<div>
								<label htmlFor="backgroundColor">Background Color:</label>
								<input
									type="color"
									id="backgroundColor"
									value={backgroundColor}
									onChange={handleBackgroundColorChange}
								/>
							</div>
						)}
						{/* Input fields for Event Name */}
						<label htmlFor="eventNameFontSize">Event Name Font Size:</label>
						<input
							type="number"
							id="eventNameFontSize"
							min="8"
							max="48"
							step="2"
							value={eventNameFontSize}
							onChange={(e) => setEventNameFontSize(parseInt(e.target.value))}
						/>
						<label htmlFor="eventNameFontStyle">Event Name Font Style:</label>
						<select
							id="eventNameFontStyle"
							value={eventNameFontStyle}
							onChange={(e) => setEventNameFontStyle(e.target.value)}
						>
							<option value="normal">Normal</option>
							<option value="italic">Italic</option>
						</select>

						<label htmlFor="eventNameFontWeight">Event Font Weight:</label>
						<select
							id="eventNameFontWeight"
							value={eventNameFontWeight}
							onChange={(e) => setEventNameFontWeight(e.target.value)}
						>
							<option value="normal">Normal</option>
							<option value="bold">Bold</option>
						</select>
						<label htmlFor="eventNameColor">Event Name Color:</label>
						<input
							type="color"
							id="eventNameColor"
							value={eventNameColor}
							onChange={(e) => setEventNameColor(e.target.value)}
						/>

						{/* Input fields for Date */}
						<label htmlFor="dateFontSize">Date Font Size:</label>
						<input
							type="number"
							id="dateFontSize"
							min="8"
							max="48"
							step="2"
							value={dateFontSize}
							onChange={(e) => setDateFontSize(parseInt(e.target.value))}
						/>
						<label htmlFor="dateFontStyle">Date Font Style:</label>
						<select
							id="dateFontStyle"
							value={dateFontStyle}
							onChange={(e) => setDateFontStyle(e.target.value)}
						>
							<option value="normal">Normal</option>
							<option value="italic">Italic</option>
						</select>
						<label htmlFor="dateFontWeight">Date Font Weight:</label>
						<select
							id="dateFontWeight"
							value={dateFontWeight}
							onChange={(e) => setDateFontWeight(e.target.value)}
						>
							<option value="normal">Normal</option>
							<option value="bold">Bold</option>
						</select>
						<label htmlFor="dateColor">Date Color:</label>
						<input
							type="color"
							id="dateColor"
							value={dateColor}
							onChange={(e) => setDateColor(e.target.value)}
						/>

						{/* Input fields for Location */}
						<label htmlFor="locationFontSize">Location Font Size:</label>
						<input
							type="number"
							id="locationFontSize"
							min="8"
							max="48"
							step="2"
							value={locationFontSize}
							onChange={(e) => setLocationFontSize(parseInt(e.target.value))}
						/>
						<label htmlFor="locationFontStyle">Location Font Style:</label>
						<select
							id="locationFontStyle"
							value={locationFontStyle}
							onChange={(e) => setLocationFontStyle(e.target.value)}
						>
							<option value="normal">Normal</option>
							<option value="italic">Italic</option>
						</select>
						<label htmlFor="locationFontWeight">Location Font Weight:</label>
						<select
							id="locationFontWeight"
							value={locationFontWeight}
							onChange={(e) => setLocationFontWeight(e.target.value)}
						>
							<option value="normal">Normal</option>
							<option value="bold">Bold</option>
						</select>
						<label htmlFor="locationColor">Location Color:</label>
						<input
							type="color"
							id="locationColor"
							value={locationColor}
							onChange={(e) => setLocationColor(e.target.value)}
						/>

						{/* Input fields for Time */}
						<label htmlFor="timeFontSize">Time Font Size:</label>
						<input
							type="number"
							id="timeFontSize"
							min="8"
							max="48"
							step="2"
							value={timeFontSize}
							onChange={(e) => setTimeFontSize(parseInt(e.target.value))}
						/>
						<label htmlFor="timeFontStyle">Time Font Style:</label>
						<select
							id="timeFontStyle"
							value={timeFontStyle}
							onChange={(e) => setTimeFontStyle(e.target.value)}
						>
							<option value="normal">Normal</option>
							<option value="italic">Italic</option>
						</select>
						<label htmlFor="timeFontWeight">Time Font Weight:</label>
						<select
							id="timeFontWeight"
							value={timeFontWeight}
							onChange={(e) => setTimeFontWeight(e.target.value)}
						>
							<option value="normal">Normal</option>
							<option value="bold">Bold</option>
						</select>
						<label htmlFor="timeColor">Time Color:</label>
						<input
							type="color"
							id="timeColor"
							value={timeColor}
							onChange={(e) => setTimeColor(e.target.value)}
						/>

						<button onClick={generateTicket}>Generate Ticket</button>
					</div>
					<div className="inner">
						<div
							id="ticketPreview"
							className="ticket-preview"
							style={{ backgroundColor }}
						>
							<h1
								style={{
									fontSize: `${eventNameFontSize}px`,
									color: eventNameColor,
									fontWeight: eventNameFontWeight,
									fontStyle: eventNameFontStyle,
								}}
							>
								Event Name: 50th Birthday Party
							</h1>
							<p
								style={{
									fontSize: `${dateFontSize}px`,
									color: dateColor,
									fontWeight: dateFontWeight,
									fontStyle: dateFontStyle,
								}}
							>
								Date: February 20, 2024
							</p>
							<p
								style={{
									fontSize: `${locationFontSize}px`,
									color: locationColor,
									fontWeight: locationFontWeight,
									fontStyle: locationFontStyle,
								}}
							>
								Location: 120, Adekunle Fajuyi Road
							</p>
							<p
								style={{
									fontSize: `${timeFontSize}px`,
									color: timeColor,
									fontWeight: timeFontWeight,
									fontStyle: timeFontStyle,
								}}
							>
								Time: 8:00 PM
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Design.propTypes = {
	toggleMode: PropTypes.func.isRequired, // toggleMode should be a function and is required
	darkMode: PropTypes.bool.isRequired, // darkMode should be a boolean and is required
	toggleSidebar: PropTypes.func.isRequired, // toggleSidebar should be a function and is required
	sidebarCollapsed: PropTypes.bool.isRequired, // sidebarCollapsed should be a boolean and is required
};

export default Design;
