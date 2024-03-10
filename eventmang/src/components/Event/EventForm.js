// EventForm.js

import React, { useState } from 'react';
import ApiService from '../services/ApiService';

const EventForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [organizerId, setOrganizerId] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const event = { name, description, location, date, organizerId, category };
        try {
            const response = await ApiService.addEvent(event);
            console.log('Event added:', response.data);
            // Redirect or display success message
        } catch (error) {
            console.error('Error adding event:', error);
            // Display error message
        }
    };

    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <label>Name:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <label>Description:
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>Location:
                <input
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    required
                />
            </label>
            <label>Date:
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                />
            </label>
            <label>Organizer ID:
                <input
                    type="text"
                    value={organizerId}
                    onChange={e => setOrganizerId(e.target.value)}
                    required
                />
            </label>
            <label>Category:
                <input
                    type="text"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Event</button>
        </form>
    );
};

export default EventForm;
