// EventList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await ApiService.getAllEvents();
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        }

        fetchEvents();
    }, []);

    return (
        <div className="event-list">
            <h2>Events List</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <div>Name: {event.name}</div>
                        <div>Description: {event.description}</div>
                        <div>Location: {event.location}</div>
                        <div>Date: {event.date}</div>
                        <div>Organizer ID: {event.organizerId}</div>
                        <div>Category: {event.category}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
