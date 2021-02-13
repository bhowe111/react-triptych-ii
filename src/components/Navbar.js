import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo|||.png';
// import routes from '../config/routes';
import AppRouter from '../router/AppRouter';
import AuthNav from './auth-nav';

function Navbar(props) {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="/">
          <img src={Logo} />
        </a>
      </h1>
      <ul>
        <li className="navLi">
          <Link to="/about">About</Link>
        </li>
        <li className="navLi">
          <Link to="/upload">Add Image</Link>
        </li>
        <li className="navLi">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="navLi">
          <Link to="/dashboard">
            <i className="fas fa-user"></i>
            <span className="hide-sm"> Dashboard</span>
          </Link>
        </li>
        <li className="navLi">
          <AuthNav />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
