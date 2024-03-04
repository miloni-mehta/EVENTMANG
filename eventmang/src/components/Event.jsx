import React, { useState, useEffect } from 'react';
import './Event.css';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
  // Dummy event data
  const dummyEvents = [
    { id: 1, name: "Tech Conference 2024", date: "2024-03-15", location: "New York" },
    { id: 2, name: "Startup Weekend", date: "2024-04-10", location: "San Francisco" },
    { id: 3, name: "Music Festival", date: "2024-05-20", location: "Chicago" },
    // Add more dummy events as needed
  ];

    // Simulate fetching events from the backend (could be replaced with actual API call)
    setEvents(dummyEvents);
  }, []);

  return (
    <div>
    <h1>Events</h1>
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <Link to={`/events/${event.id}`}>{event.name}</Link>
        </li>
      ))}
    </ul>
    <Link to="/events/new">Create New Event</Link>
  </div>
);
}


export default Events;
