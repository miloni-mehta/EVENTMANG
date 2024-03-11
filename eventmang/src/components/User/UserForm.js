// UserForm.js

import React, { useState } from 'react';
import ApiService from '../services/ApiService';
import './userForm.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email };
        try {
            const response = await ApiService.addUser(user);
            console.log('User added:', response.data);
            // Redirect or display success message
            navigate("/users");
        } catch (error) {
            console.error('Error adding user:', error);
            // Display error message
        }
    };

    return (
        <>
        <Navbar/>
        <form className="user-form" onSubmit={handleSubmit}>
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
            <button type="submit">Add User</button>
        </form>
        </>
    );
};

export default UserForm;
