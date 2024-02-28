import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation  () {
  return (
    <nav>
      <div className='navbar'>
        <div className='navbar-left'>
          <h1>Event Management System</h1>
        </div>
          <div className='navbar-midddle'>
            <div className='search-container'>
            <input type="text" placeholder='Search events'/>
            <button type="submit">Search</button>
            </div>
          </div>
          <div className='navbar-right'>
            <ul>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/profile">User Profile</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>Logout</li>
            </ul>
          </div>
      </div>
      </nav>
  );
}

export default Navigation;
