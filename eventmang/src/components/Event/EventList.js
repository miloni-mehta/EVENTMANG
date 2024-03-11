// EventList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import './eventList.css';
import Navbar from '../Navbar';
const EventList = () => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await ApiService.getAllEvents();
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };
const handleDelete = async (id) => {
        try {
            await ApiService.deleteEvent(id);
            const newEvents = events.filter(event => event.id !== id);
            setEvents(newEvents);
        } catch (error) {
            console.error('Failed to delete event', error);
        }
    };

    const startEditing = (event) => {
        setEditingEvent({ ...event });
    };

    const handleEditChange = (e) => {
        setEditingEvent({ ...editingEvent, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            await ApiService.updateEvent(editingEvent.id, editingEvent);
            const updatedEvents = events.map(event =>
                event.id === editingEvent.id ? editingEvent : event
            );
            setEvents(updatedEvents);
            setEditingEvent(null);
        } catch (error) {
            console.error('Failed to update event', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="event-list">
                <h2>Events List</h2>
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            {editingEvent && editingEvent.id === event.id ? (
                                <>
                                    <input
                                        name="name"
                                        value={editingEvent.name}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        name="description"
                                        value={editingEvent.description}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        name="location"
                                        value={editingEvent.location}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        name="date"
                                        value={editingEvent.date}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        name="organizerId"
                                        value={editingEvent.organizerId}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        name="category"
                                        value={editingEvent.category}
                                        onChange={handleEditChange}
                                    />
                                    <button onClick={handleUpdate}>Save</button>
                                    <button onClick={() => setEditingEvent(null)}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <div>Name: {event.name}</div>
                                    <div>Description: {event.description}</div>
                                    <div>Location: {event.location}</div>
                                    <div>Date: {event.date}</div>
                                    <div>Organizer ID: {event.organizerId}</div>
                                    <div>Category: {event.category}</div>
                                    <button onClick={() => startEditing(event)}>Edit</button>
                                    <button onClick={() => handleDelete(event.id)}>Delete</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default EventList;