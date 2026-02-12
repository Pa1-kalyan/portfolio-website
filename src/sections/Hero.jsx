import './Hero.css';
import CanvasHero from '../components/CanvasHero';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Pavan kalyan</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Java Backend Developer
                    </h2>
                    <p className="hero-description">
                        Specializing in building robust, scalable and high-performance server-side systems.
                        Strong foundation in Data Structures & Algorithms and competitive programming.
                        Passionate about solving complex problems and designing reliable systems.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <CanvasHero />
                </div>
            </div>
        </section>
    );
};

export default Hero;
