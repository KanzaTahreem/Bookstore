import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <header className="header">
    <nav className="navbar">
      <h1 className="title">Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="linkItem">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Books
          </NavLink>
        </li>
        <li className="linkItem">
          <NavLink
            to="categories"
            className={({ isActive }) => (isActive ? 'activelink' : undefined)}
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="user">
      <ImUser />
    </div>
  </header>

);

export default Navbar;
