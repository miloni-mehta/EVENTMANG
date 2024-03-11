// OrganizerList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import './organizerList.css';
import Navbar from '../Navbar';
const OrganizerList = () => {
    const [organizers, setOrganizers] = useState([]);
    const [editingOrganizer, setEditingOrganizer] = useState(null);

    useEffect(() => {
        fetchOrganizers();
    }, []);

    const fetchOrganizers = async () => {
        try {
            const response = await ApiService.getAllOrganizers();
            setOrganizers(response.data);
        } catch (error) {
            console.error('Error fetching organizers:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ApiService.deleteOrganizer(id);
            const newOrganizers = organizers.filter(org => org.id !== id);
            setOrganizers(newOrganizers);
        } catch (error) {
            console.error('Failed to delete organizer', error);
        }
    };

    const startEditing = (organizer) => {
        setEditingOrganizer({ ...organizer });
    };

    const handleEditChange = (e) => {
        setEditingOrganizer({ ...editingOrganizer, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            await ApiService.updateOrganizer(editingOrganizer.id, editingOrganizer);
            const updatedOrganizers = organizers.map(org =>
                org.id === editingOrganizer.id ? editingOrganizer : org
            );
            setOrganizers(updatedOrganizers);
            setEditingOrganizer(null);
        } catch (error) {
            console.error('Failed to update organizer', error);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="organizer-list">
            <h2>Organizers List</h2>
            <ul>
                {organizers.map((organizer) => (
                    <li key={organizer.id}>
                        {editingOrganizer && editingOrganizer.id === organizer.id ? (
                            <>
                                <input
                                    name="name"
                                    value={editingOrganizer.name}
                                    onChange={handleEditChange}
                                />
                                <input
                                    name="email"
                                    value={editingOrganizer.email}
                                    onChange={handleEditChange}
                                />
                                <button onClick={handleUpdate}>Save</button>
                                <button onClick={() => setEditingOrganizer(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <div>Name: {organizer.name}</div>
                                <div>Email: {organizer.email}</div>
                                <button onClick={() => startEditing(organizer)}>Edit</button>
                                <button onClick={() => handleDelete(organizer.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default OrganizerList;