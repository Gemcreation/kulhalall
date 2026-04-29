import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <h1>KulHalal</h1>
        </Link>
        
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/scan" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Scan</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/knowledge-base" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Knowledge Base</Link>
            </li>
          </ul>
        </nav>
        
        <div className="header__auth">
          <Link to="/login" className="header__auth-link">Login</Link>
          <Link to="/signup" className="header__auth-link header__auth-link--primary">Sign Up</Link>
        </div>
        
        <button className="header__menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="header__menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;