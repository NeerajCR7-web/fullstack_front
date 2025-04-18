import React, { useEffect, useState } from 'react';
import './Skills.css';

console.log('⦿ VITE_API_BASE_URL =', import.meta.env.VITE_API_BASE_URL);

export default function Skills() {
  const [skills, setSkills] = useState(null);  // null = loading
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/api/skills`;
    console.log('⦿ fetching skills from:', url);

    fetch(url)
      .then(res => {
        console.log('⦿ skills response status:', res.status);
        if (!res.ok) throw new Error(`Network response was not ok (${res.status})`);
        return res.json();
      })
      .then(data => {
        console.log('⦿ skills payload:', data);
        setSkills(data);
      })
      .catch(err => {
        console.error('Error fetching skills:', err);
        setError(err);
        setSkills([]);  // stop loading
      });
  }, []);

  // Map proficiency labels to percent
  const profMap = { Beginner: 40, Intermediate: 70, Advanced: 100 };

  if (error) {
    return (
      <section className="skills">
        <p className="error">Failed to load skills.</p>
      </section>
    );
  }
  if (skills === null) {
    return (
      <section className="skills">
        <p>Loading skills…</p>
      </section>
    );
  }
  if (skills.length === 0) {
    return (
      <section className="skills">
        <p>No skills found.</p>
      </section>
    );
  }

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
                <div className="bar-fill" style={{ width: `${pct}%` }}>
                  <span className="bar-label">{s.proficiency}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
