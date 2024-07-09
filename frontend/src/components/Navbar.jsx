import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg custom-navbar">
      <Link to="/" class="navbar-brand">
      <img src = {logo} alt="logo" className="logo" />
      </Link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/read" class="nav-link" activeClassName="active-link">Show All Post</Link>
          </li>
          <Link to="/">
            <button type="button" className="btn btn-primary navbar-btn">Create New</button>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default navbar