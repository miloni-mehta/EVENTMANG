import React from 'react';
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/Home';
import AdminList from './components/AdminList';
import EventList from './components/EventList';
import OrganizerList from './components/OrganizerList';
import UserList from './components/UserList';
import RegisterList from './components/RegisterList';
import RegisterForm from './components/RegisterForm';
import AdminForm from './components/AdminForm'; // Import AdminForm component
import EventForm from './components/EventForm'; // Import EventForm component
import OrganizerForm from './components/OrganizerForm'; // Import OrganizerForm component
import UserForm from './components/UserForm'; // Import UserForm component

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admins" element={<AdminList />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/organizers" element={<OrganizerList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/registers" element={<RegisterList />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/admin/add" element={<AdminForm />} />
          <Route path="/event/add" element={<EventForm />} />
          <Route path="/organizer/add" element={<OrganizerForm />} />
          <Route path="/user/add" element={<UserForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
