// AdminForm.js

import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './AdminForm.css';
const AdminForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const admin = { email, password };
        try {
            const response = await ApiService.addAdmin(admin);
            console.log('Admin added:', response.data);
            // Redirect or display success message
        } catch (error) {
            console.error('Error adding admin:', error);
            // Display error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>Password:
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Admin</button>
        </form>
    );
};

export default AdminForm;
