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
          <li class="nav-item active">
            <Link to="/" class="nav-link" activeClassName="active-link">Create Post</Link>
          </li>
          <li class="nav-item">
            <Link to="/read" class="nav-link" activeClassName="active-link">All Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default navbar