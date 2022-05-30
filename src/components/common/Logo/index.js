import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <Link to="/">
        <img src={logo} alt='logo' />
      </Link>
      <span>
        <b>Ziptrail</b>
      </span>
    </div>
    <p>
      <b>Restaurant & BBQ 123123</b>
    </p>
  </div>
);

export default Logo;
