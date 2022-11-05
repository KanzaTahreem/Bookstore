import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>BookStore</h1>
    <ul>
      <li>
        <NavLink to="/" end> Books </NavLink>
      </li>
      <li>
        <NavLink to="categories"> Categories </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
