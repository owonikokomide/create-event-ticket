/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const AccountSettings = () => {
	// Sample data for user profile (replace with actual data from API or state management)
	const [profile, setProfile] = useState({
		username: "john_doe",
		email: "john@example.com",
		fullName: "John Doe",
		address: "123 Main St, City, Country",
		paymentMethod: "Credit Card",
		notification: true,
	});

	// Handler for updating profile information
	const updateProfile = (e) => {
		const { name, value } = e.target;
		setProfile((prevProfile) => ({
			...prevProfile,
			[name]: value,
		}));
	};

	// Handler for toggling notification settings
	const toggleNotification = () => {
		setProfile((prevProfile) => ({
			...prevProfile,
			notification: !prevProfile.notification,
		}));
	};

	return (
		<section className="account-settings-section">
			<h2>Account Settings</h2>
			<div className="profile-form">
				<label>Username:</label>
				<input
					type="text"
					name="username"
					value={profile.username}
					onChange={updateProfile}
				/>

				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={profile.email}
					onChange={updateProfile}
				/>

				<label>Full Name:</label>
				<input
					type="text"
					name="fullName"
					value={profile.fullName}
					onChange={updateProfile}
				/>

				<label>Address:</label>
				<input
					type="text"
					name="address"
					value={profile.address}
					onChange={updateProfile}
				/>

				<label>Payment Method:</label>
				<select
					name="paymentMethod"
					value={profile.paymentMethod}
					onChange={updateProfile}
				>
					<option value="Credit Card">Credit Card</option>
					<option value="PayPal">PayPal</option>
					{/* Add more payment methods as needed */}
				</select>
			</div>

			<div className="notification-settings">
				<label>Receive Notifications:</label>
				<input
					type="checkbox"
					checked={profile.notification}
					onChange={toggleNotification}
				/>
			</div>
		</section>
	);
}

export default AccountSettings