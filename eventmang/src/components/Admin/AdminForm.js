// AdminForm.js

import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './AdminForm.css';
import Navbar from '../Navbar.js'
 
const AdminForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const admin = { email, password };
        try {
            await ApiService.addAdmin(admin);
            console.log('Admin added successfully');
            // Redirect or display success message
        } catch (error) {
            console.error('Error adding admin:', error);
            // Display error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Navbar/>
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <br></br>
            <label>Password:
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </label>
            <br></br>
            <button type="submit">Add Admin</button>
           
        </form>
        </>
    );
};

export default AdminForm;