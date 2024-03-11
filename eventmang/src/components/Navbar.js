import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <Link className="navbar-brand" to="/">
         Event Management
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
       
        <div
          className="collapse navbar-collapse left"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <Link className="nav-link navbar-brand" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link navbar-brand" to="/admin/add">
               Admin Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/event/add">
                EventForm
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link navbar-brand" to="/organizer/add">
              OrganizerForm
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/user/add">
              User Form
              </Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/register">
              RegisterForm
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}