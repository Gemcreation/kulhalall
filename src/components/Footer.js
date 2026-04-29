import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__cta">
          <h2 className="footer__cta-title">Download KulHalal App</h2>
          <p className="footer__cta-text">Verify halal status on the go with our mobile app.</p>
          <div className="footer__app-links">
            <a href="#" className="footer__app-link">
              <img src="https://via.placeholder.com/120x40?text=App+Store" alt="Download on App Store" />
            </a>
            <a href="#" className="footer__app-link">
              <img src="https://via.placeholder.com/120x40?text=Google+Play" alt="Get it on Google Play" />
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2023 KulHalal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;