// RegisterList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import './registerList.css';
import Navbar from '../Navbar';
const RegisterList = () => {
    const [registers, setRegisters] = useState([]);

    useEffect(() => {
        async function fetchRegisters() {
            try {
                const response = await ApiService.getAllRegisters();
                setRegisters(response.data);
            } catch (error) {
                console.error('Error fetching registers:', error);
            }
        }

        fetchRegisters();
    }, []);

    return (
        <>
        <Navbar/>
        <div className="register-list">
            <h2>Registers List</h2>
            <ul>
                {registers.map(register => (
                    <li key={register.id}>
                    <div>User: {register.user ? register.user.name : 'Unknown User'}</div>
                    <div>Event: {register.event ? register.event.name : 'Unknown Event'}</div>
                </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default RegisterList;
