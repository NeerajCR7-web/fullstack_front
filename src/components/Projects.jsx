import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(p => (
          <div className="project-card" key={p._id}>
            <img src={p.imageUrl} alt={p.title} />
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a
                href={p.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
