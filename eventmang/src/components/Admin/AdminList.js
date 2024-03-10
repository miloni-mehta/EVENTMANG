// AdminList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import './AdminList.css';
const AdminList = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        async function fetchAdmins() {
            try {
                const response = await ApiService.getAllAdmins();
                setAdmins(response.data);
            } catch (error) {
                console.error('Error fetching admins:', error);
            }
        }

        fetchAdmins();
    }, []);

    return (
        <div>
            <h2>Admins List</h2>
            <ul>
                {admins.map(admin => (
                    <li key={admin.id}>
                        <div>{admin.email}</div>
                        <div>{admin.password}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminList;
