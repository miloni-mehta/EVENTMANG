import React from 'react';
import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import Header from './components/common/Header';
import Home from './components/Home';
import AdminList from './components/Admin/AdminList';
import EventList from './components//Event/EventList';
import OrganizerList from './components/Organizer/OrganizerList';
import UserList from './components/User/UserList';
import RegisterList from './components/Register/RegisterList';
import RegisterForm from './components/Register/RegisterForm';
import AdminForm from './components/Admin/AdminForm'; 
import EventForm from './components/Event/EventForm';
import OrganizerForm from './components/Organizer/OrganizerForm'; 
import UserForm from './components/User/UserForm'; 
import ApiService from './components/services/ApiService';
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home/>}></Route>
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
          <Route path="/ApiService" element={<ApiService />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
