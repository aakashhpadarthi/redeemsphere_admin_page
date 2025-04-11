import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import CompanyLogo from '../assets/RedeemSphere.jpg';

const Navbar = () => {
  return (
    <header className="header">
      <div>
        <img src={CompanyLogo} alt="Redeem Sphere Logo" id="logo" />
      </div>
      <nav id="linksContainer">
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/coupons" activeClassName="active">Coupons Management</NavLink></li>
          <li><NavLink to="/users" activeClassName="active">User Management</NavLink></li>
          <li><NavLink to="/payment" activeClassName="active">Payment Management</NavLink></li>
          <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
