import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to our Event Management System</h1>
      <p>Explore upcoming events, manage your profile, and much more!</p>
      <footer>
        <ul>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </footer>
    </div>
  
  );
}

export default Home;
