import React from 'react';
import "./App.css"



const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
      <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <b>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </b>
      <button className='hi'>Login</button>
    </nav>
  );
};

export default Navigation;
