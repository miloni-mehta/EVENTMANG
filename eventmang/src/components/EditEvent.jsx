import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditEvent = () => {
  const { id } = useParams();
  const [eventName, setEventName] = useState('Tech Conference 2024');
  const [eventDate, setEventDate] = useState('2024-03-15');
  const [eventLocation, setEventLocation] = useState('New York');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions to edit event (e.g., send data to backend)
    console.log("Event edited:", { id, eventName, eventDate, eventLocation });
    // Redirect to event details page after editing
    history.push(`/events/${id}`);
  };

  return (
    <div>
      <h1>Edit Event</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditEvent;
