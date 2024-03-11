// OrganizerForm.js

import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './organizerForm.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
const OrganizerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const organizer = { name, email };
        try {
            const response = await ApiService.addOrganizer(organizer);
            console.log('Organizer added:', response.data);
            // Redirect or display success message
            navigate("/organizers");
        } catch (error) {
            console.error('Error adding organizer:', error);
            // Display error message
        }
    };
   
    return (
        <>
        <Navbar/>
        <form className="organizer-form" onSubmit={handleSubmit}>
            <label>Name:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <br/><br/>
            <label>Email:
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <br/><br/>
            <button type="submit" >Add Organizer</button>
        </form>
        </>
    );
};

export default OrganizerForm;
