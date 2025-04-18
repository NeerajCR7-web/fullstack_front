import React, { useEffect, useState } from 'react';
import './Projects.css';

console.log('⦿ VITE_API_BASE_URL =', import.meta.env.VITE_API_BASE_URL);

export default function Projects() {
  const [projects, setProjects] = useState(null);  // null = loading
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_BASE_URL}/api/projects`;
    console.log('⦿ fetching projects from:', url);

    fetch(url)
      .then(res => {
        console.log('⦿ projects response status:', res.status);
        if (!res.ok) throw new Error(`Network response was not ok (${res.status})`);
        return res.json();
      })
      .then(data => {
        console.log('⦿ projects payload:', data);
        setProjects(data);
      })
      .catch(err => {
        console.error('Error fetching projects:', err);
        setError(err);
        setProjects([]);  // stop loading
      });
  }, []);

  if (error) {
    return (
      <section className="projects">
        <p className="error">Failed to load projects.</p>
      </section>
    );
  }
  if (projects === null) {
    return (
      <section className="projects">
        <p>Loading projects…</p>
      </section>
    );
  }
  if (projects.length === 0) {
    return (
      <section className="projects">
        <p>No projects found.</p>
      </section>
    );
  }

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
