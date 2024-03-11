// RegisterForm.js

import React, { useState,useEffect } from 'react';
import ApiService from '../services/ApiService';
import './registerForm.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
const RegisterForm = () => {
    const [users, setUsers] = useState([]);
    const [events, setEvents] = useState([]);
    const [userId, setUserId] = useState('');
    const [eventId, setEventId] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchUsersAndEvents() {
            try {
                const userResponse = await ApiService.getAllUsers();
                const eventResponse = await ApiService.getAllEvents();
                setUsers(userResponse.data);
                setEvents(eventResponse.data);
                setLoading(false);
               
            } catch (error) {
                console.error('Error fetching users and events:', error);
                setLoading(false);
            }
        }

        fetchUsersAndEvents();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const register = { userId, eventId };
        try {
            const response = await ApiService.addRegister(register);
            console.log('Register added:', response.data);
            // Redirect or display success message
            navigate("/registers");
        } catch (error) {
            console.error('Error adding register:', error);
            // Display error message
        }
    };
    if (loading) {
        return <div>Loading...</div>; // Display loading indicator while data is being fetched
    }

  
    return (
        <>
        <Navbar/>
        <form className="register-form" onSubmit={handleSubmit}>
            <label>User:</label>
            <select value={userId} onChange={e => setUserId(e.target.value)} required>
                <option value="">Select User</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <br/><br/>
            <label>Event:</label>
            <select value={eventId} onChange={e => setEventId(e.target.value)} required>
                <option value="">Select Event</option>
                {events.map(event => (
                    <option key={event.id} value={event.id}>{event.name}</option>
                ))}
            </select>
            <br/><br/>
            <button type="submit">Register Event</button>
        </form>
        </>
    );
};

export default RegisterForm;