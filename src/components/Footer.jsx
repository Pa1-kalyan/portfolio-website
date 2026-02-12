import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="social-icons">
                    <a href="https://github.com/Pa1-kalyan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/pavan-kalyan-pachipala-4589a6351" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
                <p className="copyright">
                    &copy; 2026 Pavan Kalyan. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
