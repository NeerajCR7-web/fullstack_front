# Full Stack Portfolio Application

A dynamic portfolio website showcasing Projects and Skills, built with a Node.js/Express/MongoDB backend and a React/Vite frontend. The backend exposes RESTful API endpoints for Projects and Skills, and includes an admin interface built with Pug. The frontend consumes these APIs, displaying projects, skills with animated progress bars, and includes a contact form.

Render:- https://fullstack-back-4pmw.onrender.com
Vercel:- https://fullstack-front-ten.vercel.app/

## Features

- **Projects Section**: Displays project cards with image, title, description, and link.  
- **Skills Section**: Shows skills with proficiency levels visualized as progress bars.  
- **Contact Form**: Simple form to send a message (alert placeholder).  
- **Admin Dashboard**: CRUD interface for managing projects and skills (Pug templates).  
- **API Endpoints**: `/api/projects` and `/api/skills`.  

## Tech Stack

- **Frontend**  
  - React 18 + Vite  
  - CSS Modules / Plain CSS  
- **Backend**  
  - Node.js + Express  
  - MongoDB + Mongoose  
  - Pug for admin views  
- **Deployment**  
  - Frontend on Vercel  
  - Backend on Render  
- **Other**  
  - CORS for cross-origin resource sharing  