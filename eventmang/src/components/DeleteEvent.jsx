import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const DeleteEvent = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    // Perform actions to delete event (e.g., send request to backend)
    console.log("Event deleted:", id);
    // Redirect to events page after deletion
    history.push('/events');
  };

  return (
    <div>
      <h1>Delete Event</h1>
      <p>Are you sure you want to delete this event?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
    </div>
  );
}

export default DeleteEvent;
