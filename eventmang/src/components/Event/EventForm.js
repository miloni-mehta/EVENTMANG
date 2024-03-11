// EventForm.js

import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
const EventForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [organizerId, setOrganizerId] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const event = { name, description, location, date, organizerId, category };
        try {
            const response = await ApiService.addEvent(event);
            console.log('Event added:', response.data);
            // Redirect or display success message
            navigate("/events")
        } catch (error) {
            console.error('Error adding event:', error);
            // Display error message
        }
    };

    return (
        <>
        <Navbar/>
        <form className="event-form" onSubmit={handleSubmit}>
            
            <label>Name:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <br/><br/>
            <label>Description:
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </label>
            <br/><br/>
            <label>Location:
                <input
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    required
                />
            </label>
            <br/><br/>
            <label>Date:
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    required
                />
            </label>
            <br/><br/>
            <label>Organizer ID:
                <input
                    type="text"
                    value={organizerId}
                    onChange={e => setOrganizerId(e.target.value)}
                    required
                />
            </label>
            <br/><br/>
            <label>Category:
                <input
                    type="text"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    required
                />
            </label>
            <br/><br/>
            <button type="submit">Add Event</button>
           
        </form>
        </>
    );
};

export default EventForm;
