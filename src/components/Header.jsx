// Header.js
import React from 'react';
import '../custom_css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h7>Kartik Bansal</h7>
        <button className = "contact-btn">Contact</button>
      </div >
      <div className = "description">
        <h5>CREATIVE UI/UX DESIGNER & WEB DEVELOPER</h5>
      </div>
      
    </header>
  );
};

export default Header;
