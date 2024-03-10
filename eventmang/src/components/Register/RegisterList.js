// RegisterList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import './registerList.css';

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
        <div className="register-list">
            <h2>Registers List</h2>
            <ul>
                {registers.map(register => (
                    <li key={register.id}>
                        <div>User: {register.user.name}</div>
                        <div>Event: {register.event.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegisterList;
