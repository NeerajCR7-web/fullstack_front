import React, { useEffect, useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setSkills(data))
      .catch(err => console.error('Error fetching skills:', err));
  }, []);

  // Map proficiency labels to a percentage
  const profMap = {
    Beginner: 40,
    Intermediate: 70,
    Advanced: 100
  };

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(s => {
          const pct = profMap[s.proficiency] || 50;
          return (
            <div className="skill-card" key={s._id}>
              <h3>{s.name}</h3>
              <div className="bar-container">
                <div
                  className="bar-fill"
                  style={{ width: `${pct}%` }}
                >
                  <span className="bar-label">
                    {s.proficiency}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
