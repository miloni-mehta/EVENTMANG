// OrganizerForm.js

import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './organizerForm.css';

const OrganizerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const organizer = { name, email };
        try {
            const response = await ApiService.addOrganizer(organizer);
            console.log('Organizer added:', response.data);
            // Redirect or display success message
        } catch (error) {
            console.error('Error adding organizer:', error);
            // Display error message
        }
    };

    return (
        <form className="organizer-form" onSubmit={handleSubmit}>
            <label>Name:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <label>Email:
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Organizer</button>
        </form>
    );
};

export default OrganizerForm;
