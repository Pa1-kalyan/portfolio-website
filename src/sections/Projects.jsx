import { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

const Projects = () => {
    const [popup, setPopup] = useState({ show: false, message: '' });

    const handleLinkClick = (e, type) => {
        e.preventDefault();
        const message = type === 'github'
            ? "Source code is currently under review. Will be available soon!"
            : "Live demo is currently being deployed. Please check back later!";

        setPopup({ show: true, message });

        // Hide popup after 3 seconds
        setTimeout(() => {
            setPopup(prev => ({ ...prev, show: false }));
        }, 3000);
    };

    const projects = [
        {
            title: 'Airline Booking Application',
            description: 'A comprehensive backend system for flight reservations. Features include seat selection, booking management, and real-time flight status updates. Implemented complex SQL queries for schedule optimization.',
            techStack: ['Java', 'Spring Boot', 'MySQL', 'JWT Auth'],
            githubLink: '#',
            liveLink: '#',
        },
        {
            title: 'E-commerce API',
            description: 'Scalable RESTful API for an online retail platform. Handles product catalog, user authentication, shopping cart logic, and payment gateway integration. Optimized for high concurrency.',
            techStack: ['Java', 'Spring MVC', 'Hibernate', 'Redis'],
            githubLink: '#',
            liveLink: '#',
        },
        {
            title: 'Inventory Management Module',
            description: 'Robust inventory tracking system designed for supply chain efficiency. Features real-time stock updates, low-stock alerts, and detailed reporting dashboards.',
            techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
            githubLink: '#',
            liveLink: '#',
        },
    ];

    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.githubLink} className="project-link" onClick={(e) => handleLinkClick(e, 'github')}>
                                <FaGithub /> Source Code
                            </a>
                            <a href={project.liveLink} className="project-link" onClick={(e) => handleLinkClick(e, 'live')}>
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Notification */}
            <div className={`project-popup ${popup.show ? 'show' : ''}`}>
                <FaInfoCircle className="popup-icon" />
                <span>{popup.message}</span>
            </div>
        </section>
    );
};

export default Projects;
