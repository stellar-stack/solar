import React from 'react';
import '../../src/index.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <h4>Contact Us</h4>
          <p>Phone: <a href="tel:+917359956059">+91 7359956059</a></p>
          <p>Email: <a href="mailto:info@solarco.com">info@solarco.com</a></p>
        </div>

        <div className="socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com/solarco" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              {/* Facebook SVG */}
              <svg width="24" height="24" fill="#4267B2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z"/>
              </svg>
            </a>
            <a href="https://twitter.com/solarco" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              {/* Twitter SVG */}
              <svg width="24" height="24" fill="#1DA1F2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.373 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.558 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.934 4.934 0 01-2.224.085 4.918 4.918 0 004.588 3.417 9.867 9.867 0 01-6.102 2.104c-.395 0-.787-.023-1.175-.068a13.945 13.945 0 007.548 2.209c9.056 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/solarco" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              {/* LinkedIn SVG */}
              <svg width="24" height="24" fill="#0A66C2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.369 4.266 5.455v6.286zM5.337 7.433a2.07 2.07 0 01-2.07-2.07 2.07 2.07 0 114.14 0 2.07 2.07 0 01-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451c.98 0 1.778-.774 1.778-1.729V1.729C24 .774 23.205 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SolarCo. All rights reserved.</p>
        <p>Empowering your future with clean energy.</p>
      </div>
    </footer>
  );
};

export default Footer;
