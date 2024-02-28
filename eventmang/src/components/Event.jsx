import React, { useState, useEffect } from 'react';
import './Event.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  // Dummy event data
  const dummyEvents = [
    { id: 1, name: "Tech Conference 2024", date: "2024-03-15", location: "New York" },
    { id: 2, name: "Startup Weekend", date: "2024-04-10", location: "San Francisco" },
    { id: 3, name: "Music Festival", date: "2024-05-20", location: "Chicago" },
    // Add more dummy events as needed
  ];

  useEffect(() => {
    // Simulate fetching events from the backend (could be replaced with actual API call)
    setEvents(dummyEvents);
  }, []);

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
