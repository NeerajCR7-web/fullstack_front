import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Built by Neeraj Kumar</p>
        <div className="social-links">
          <a
            href="https://linkedin.com/in/neeraj-k-89a460114"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/NeerajCR7-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:neekumcr7@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
