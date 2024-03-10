// UserList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import './userList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await ApiService.getAllUsers();
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
