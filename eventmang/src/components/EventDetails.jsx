import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details from backend or use dummy data
    const dummyEvent = {
      id: 1,
      name: "Tech Conference 2024",
      date: "2024-03-15",
      location: "New York",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };
    setEvent(dummyEvent);
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{event.name}</h1>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <Link to={`/events/${id}/edit`}>Edit</Link>
      <button>Delete</button>
    </div>
  );
}

export default EventDetails;
