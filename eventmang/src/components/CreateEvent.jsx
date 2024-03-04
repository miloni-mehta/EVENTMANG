import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions to create event (e.g., send data to backend)
    console.log("Event created:", { eventName, eventDate, eventLocation });
    // Redirect to events page after creation
    history.push('/events');
  };

  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
        <label>
          Event Date:
          <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </label>
        <label>
          Event Location:
          <input type="text" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
