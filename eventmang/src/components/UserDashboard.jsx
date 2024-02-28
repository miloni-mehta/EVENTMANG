import React, { useState, useEffect } from 'react';

const UserDashboard = () => {
    // Mock user data
    const mockUserData = {
        name: "John Doe",
        email: "john@example.com",
        // Add more mock user data if needed
    };

    // Mock upcoming events data
    const mockUpcomingEvents = [
        { id: 1, name: "Event 1" },
        { id: 2, name: "Event 2" },
        { id: 3, name: "Event 3" },
        // Add more mock events if needed
    ];

    return (
        <div className="user-dashboard">
            <h1>Welcome, {mockUserData.name}!</h1>
            <div className="user-profile">
                <h2>Your Profile</h2>
                <p>Name: {mockUserData.name}</p>
                <p>Email: {mockUserData.email}</p>
                {/* Add more profile information here */}
            </div>
            <div className="upcoming-events">
                <h2>Upcoming Events</h2>
                <ul>
                    {mockUpcomingEvents.map(event => (
                        <li key={event.id}>
                            <span>{event.name}</span>
                            {/* Add more event details if needed */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserDashboard;
