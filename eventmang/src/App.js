import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Event';
import UserProfile from './components/UserProfile';
import  Navigation  from './components/Navigation';
import ContactUs from './components/ContactUs';
function App() {
  return (
    <>
        <Navigation />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;