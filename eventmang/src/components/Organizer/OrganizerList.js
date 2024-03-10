// OrganizerList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import './organizerList.css';

const OrganizerList = () => {
    const [organizers, setOrganizers] = useState([]);

    useEffect(() => {
        async function fetchOrganizers() {
            try {
                const response = await ApiService.getAllOrganizers();
                setOrganizers(response.data);
            } catch (error) {
                console.error('Error fetching organizers:', error);
            }
        }

        fetchOrganizers();
    }, []);

    return (
        <div className="organizer-list">
            <h2>Organizers List</h2>
            <ul>
                {organizers.map(organizer => (
                    <li key={organizer.id}>
                        <div>Name: {organizer.name}</div>
                        <div>Email: {organizer.email}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrganizerList;
