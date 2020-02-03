import React from 'react';
import '../css/Header.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={"/cb-logo.png"} className="logo" alt="logo" />
      <div className="logo-name-container">
        <div className="logo-name">Chris Barclay</div>
        <div className="logo-title">Web Developer</div>
      </div>
    </div>
  );
};

export default Logo;