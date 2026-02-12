import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Infinite Computer Solutions',
            role: 'Software Engineer',
            duration: 'Mar 2024 – Present',
            logoText: 'ICS',
            color: '#0056b3' // Corporate Blue
        },
        {
            company: 'Abhyaz (MTAB Technology Center)',
            role: 'System Admin Intern',
            duration: 'Nov 2023 – Feb 2024',
            logoText: 'AB',
            color: '#e05d26' // Abhyaz Orange-ish
        },
        {
            company: 'Internshala',
            role: 'Student Partner – ISP',
            duration: 'Oct 2023 – Dec 2023',
            logoText: 'IS',
            color: '#0096fa' // Internshala Blue
        },
    ];

    return (
        <section id="experience" className="experience">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="experience-header">
                                <div className="company-logo" style={{ backgroundColor: `${exp.color}20`, color: exp.color, borderColor: `${exp.color}40` }}>
                                    {exp.logoText}
                                </div>
                                <div className="experience-info">
                                    <h3 className="company-name">{exp.company}</h3>
                                    <p className="role-title">{exp.role}</p>
                                </div>
                            </div>
                            <span className="duration">{exp.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
