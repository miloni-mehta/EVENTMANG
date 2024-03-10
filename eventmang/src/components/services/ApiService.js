import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const ApiService = {
    // Admin APIs
    getAllAdmins: async () => {
        return await axios.get(`${BASE_URL}/admins`);
    },
    addAdmin: async (admin) => {
        return await axios.post(`${BASE_URL}/admins`, admin);
    },
    saveAdmin: async (admin) => {
        return await axios.put(`${BASE_URL}/admins/${admin.id}`, admin);
    },
    deleteAdmin: async (id) => {
        return await axios.delete(`${BASE_URL}/admins/${id}`);
    },

    // Event APIs
    getAllEvents: async () => {
        return await axios.get(`${BASE_URL}/events`);
    },
    addEvent: async (event) => {
        return await axios.post(`${BASE_URL}/events`, event);
    },
    saveEvent: async (event) => {
        return await axios.put(`${BASE_URL}/events/${event.id}`, event);
    },
    deleteEvent: async (id) => {
        return await axios.delete(`${BASE_URL}/events/${id}`);
    },

    // Organizer APIs
    getAllOrganizers: async () => {
        return await axios.get(`${BASE_URL}/organizers`);
    },
    addOrganizer: async (organizer) => {
        return await axios.post(`${BASE_URL}/organizers`, organizer);
    },
    saveOrganizer: async (organizer) => {
        return await axios.put(`${BASE_URL}/organizers/${organizer.id}`, organizer);
    },
    deleteOrganizer: async (id) => {
        return await axios.delete(`${BASE_URL}/organizers/${id}`);
    },

    // User APIs
    getAllUsers: async () => {
        return await axios.get(`${BASE_URL}/users`);
    },
    addUser: async (user) => {
        return await axios.post(`${BASE_URL}/users`, user);
    },
    saveUser: async (user) => {
        return await axios.put(`${BASE_URL}/users/${user.id}`, user);
    },
    deleteUser: async (id) => {
        return await axios.delete(`${BASE_URL}/users/${id}`);
    },

    // Register APIs
    getAllRegisters: async () => {
        return await axios.get(`${BASE_URL}/registers`);
    },
    addRegister: async (register) => {
        return await axios.post(`${BASE_URL}/registers`, register);
    },
    saveRegister: async (register) => {
        return await axios.put(`${BASE_URL}/registers/${register.id}`, register);
    },
    deleteRegister: async (id) => {
        return await axios.delete(`${BASE_URL}/registers/${id}`);
    },
};

export default ApiService;
