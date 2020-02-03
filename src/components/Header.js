import React from 'react';
import Logo from './Logo';
import Navi from './Navi';
import Social from './Social';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="App-header">
      <header className="header">
        <Logo />
        <Navi />
        <Social />
      </header>
    </div>
  );
};

export default Header;