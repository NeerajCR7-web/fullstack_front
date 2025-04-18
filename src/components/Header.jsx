import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="profile.jpg"
          alt="Neeraj Kumar"
          className="profile-image"
        />
        <div className="header-text">
          <h1>Neeraj Kumar</h1>
          <p className="subtitle">Full Stack Developer</p>
          <p className="bio">
            Passionate developer based in Toronto, specializing in building
            modern web apps with React, Express, and Node.js. I love solving
            complex problems and continuously learning new technologies.
          </p>
        </div>
      </div>
    </header>
  );
}
