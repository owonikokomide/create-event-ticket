/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const MyEvents = () => {
	// Sample data for events (replace with actual data from API or state management)
	const [events, setEvents] = useState([
		{
			id: 1,
			name: "Music Concert",
			date: "2024-03-25",
			location: "City Hall",
			status: "upcoming",
		},
		{
			id: 2,
			name: "Art Exhibition",
			date: "2024-04-10",
			location: "Art Gallery",
			status: "upcoming",
		},
		{
			id: 3,
			name: "Tech Conference",
			date: "2024-05-15",
			location: "Convention Center",
			status: "past",
		},
	]);

	return (
		<section className="my-events-section">
			<h2>My Events</h2>
			<div className="event-list">
				{events.map((event) => (
					<div key={event.id} className="event-card">
						<h3>{event.name}</h3>
						<p>Date: {event.date}</p>
						<p>Location: {event.location}</p>
						<p>Status: {event.status}</p>
						{/* Quick actions */}
						<div className="quick-actions">
							<button>Edit</button>
							<button>Delete</button>
						</div>
					</div>
				))}
			</div>
			{/* Search and filter options */}
			<div className="search-filter">
				<input type="text" placeholder="Search Events" />
				<select>
					<option value="all">All</option>
					<option value="upcoming">Upcoming</option>
					<option value="past">Past</option>
				</select>
			</div>
		</section>
	);
}

export default MyEvents