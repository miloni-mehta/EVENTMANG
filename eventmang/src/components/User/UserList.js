// UserList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import './userList.css';
import Navbar from '../Navbar';
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
   
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await ApiService.getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await ApiService.deleteUser(id);
            const newUsers = users.filter(org => org.id !== id);
            setUsers(newUsers);
        } catch (error) {
            console.error('Failed to delete user', error);
        }
    };
    const startEditing = (user) => {
        setEditingUser({ ...user });
    };

    const handleEditChange = (e) => {
        setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            await ApiService.updateUser(editingUser.id, editingUser);
            const updatedUsers = users.map(org =>
                org.id === editingUser.id ? editingUser : org
            );
            setUsers(updatedUsers);
            setEditingUser(null);
        } catch (error) {
            console.error('Failed to update user', error);
        }
    };
    return (
        <>
        <Navbar/>
        <div className="user-list">
            <h2>Users List</h2>
            <ul>
            {users.map((user) => (
                    <li key={user.id}>
                        {editingUser && editingUser.id === user.id ? (
                            <>
                                <input
                                    name="name"
                                    value={editingUser.name}
                                    onChange={handleEditChange}
                                />
                                <input
                                    name="email"
                                    value={editingUser.email}
                                    onChange={handleEditChange}
                                />
                                <button onClick={handleUpdate}>Save</button>
                                <button onClick={() => setEditingUser(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <div>Name: {user.name}</div>
                                <div>Email: {user.email}</div>
                                <button onClick={() => startEditing(user)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};


export default UserList;
