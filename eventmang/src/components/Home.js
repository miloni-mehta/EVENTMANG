// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/footer';

const Home = () => (
  <div className="home">
    <Header />
    <nav>
      <ul>
      <li><Link to="/events">Events</Link></li>
        <li><Link to="/register">Register for Event</Link></li>
      </ul>
    </nav>
    <p>Explore upcoming events, manage your profile, and much more!</p>
    <Footer />
  </div>
);

export default Home;
