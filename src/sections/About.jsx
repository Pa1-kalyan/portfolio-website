import './About.css';
import { FaJava, FaGitAlt, FaDocker, FaAws, FaCubes } from 'react-icons/fa';
import {
    SiSpringboot,
    SiMysql,
    SiPostgresql,
    SiHibernate,
    SiPostman,
    SiRedis,
    SiApachekafka,
    SiJenkins
} from 'react-icons/si';

const About = () => {
    const skills = [
        { name: 'Java', icon: <FaJava color="#da3f3fff" /> },
        { name: 'Spring Boot', icon: <SiSpringboot color="#6db33f" /> },
        { name: 'Microservices', icon: <FaCubes color="#61dafb" /> },
        { name: 'Apache Kafka', icon: <SiApachekafka color="var(--accent-color)" /> },
        { name: 'MySQL', icon: <SiMysql color="#00758f" /> },
        { name: 'Redis', icon: <SiRedis color="#dc382d" /> },
        { name: 'AWS', icon: <FaAws color="#ff9900" /> },
        { name: 'Git', icon: <FaGitAlt color="#f05032" /> },
        { name: 'Jenkins', icon: <SiJenkins color="#ca2727ff" /> },
    ];

    return (
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I am a dedicated <strong>Java Backend Developer</strong> with 2 years of professional experience in designing and implementing scalable server-side applications.
                    </p>
                    <p>
                        My passion lies in backend architecture, building secure RESTful APIs and optimizing database performance. I have a strong foundation in Object-Oriented Programming and modern software development practices.
                    </p>
                    <p>
                        I thrive in collaborative environments and am always eager to tackle complex technical challenges to deliver high-quality software solutions.
                    </p>
                </div>
                <div className="skills-container">
                    <h3 className="skills-title">Technical Skills</h3>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                        <div className="skill-card quote-card">
                            <p>
                                Looking for another skill? <br />
                                If a skill helps me grow, it earns a place here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
