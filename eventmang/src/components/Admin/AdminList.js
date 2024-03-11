// AdminList.js

import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import './AdminList.css';
import Navbar from '../Navbar'; 
const AdminList = () => {
    const [admins, setAdmins] = useState([]);
    const [editingAdminId, setEditingAdminId] = useState(null);
    const [updatedEmail, setUpdatedEmail] = useState('');
    const [updatedPassword, setUpdatedPassword] = useState('');
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

    const handleDeleteAdmin = async (id) => {
        try {
            await ApiService.deleteAdmin(id);
            setAdmins(admins.filter(admin => admin.id !== id));
            console.log('Admin deleted successfully');
        } catch (error) {
            console.error('Error deleting admin:', error);
        }
    };
    const handleUpdateAdmin = async (admin) => {
        try {
            const updatedAdmin = { id: admin.id, email: updatedEmail, password: updatedPassword };
            await ApiService.updateAdmin(updatedAdmin);
            setEditingAdminId(null);
            setAdmins(admins.map(a => (a.id === admin.id ? updatedAdmin : a)));
            console.log('Admin updated successfully');
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };

    const handleCancelEdit = () => {
        setEditingAdminId(null);
    };

    return (
        <>
        <Navbar/>
        <div>
            
      
            <h2>Admins List</h2>
            <ul>
                {admins.map(admin => (
                    <li key={admin.id}>
                        {editingAdminId === admin.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={updatedEmail}
                                    onChange={(e) => setUpdatedEmail(e.target.value)}
                                    placeholder="Enter new email"
                                />
                                <input
                                    type="text"
                                    value={updatedPassword}
                                    onChange={(e) => setUpdatedPassword(e.target.value)}
                                    placeholder="Enter new password"
                                />
                                <button onClick={() => handleUpdateAdmin(admin)}>Save</button>
                                <button onClick={handleCancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                <div>Email: {admin.email}</div>
                                <div>Password: {admin.password}</div>
                                <button onClick={() => setEditingAdminId(admin.id)}>Edit</button>
                                <button onClick={() => handleDeleteAdmin(admin.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            </div>
        </>
    );
};

export default AdminList;