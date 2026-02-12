import { useState, useRef } from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // null, 'success', 'error'

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Replace with your actual EmailJS Service ID, Template ID, and Public Key
        // Best practice: use environment variables (e.g., import.meta.env.VITE_EMAILJS_SERVICE_ID)
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS keys are missing!");
            setStatus('error');
            setLoading(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(null), 5000); // Clear message after 5s
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus('error');
                setTimeout(() => setStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                {/* Left Column: Contact Info & Socials */}
                <div className="contact-info-column">
                    <div className="info-group">
                        <h3 className="column-title">Contact Information</h3>
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box">
                                    <FaEnvelope />
                                </div>
                                <div className="item-content">
                                    <span className="item-label">Email</span>
                                    <a href="mailto:pavantheciso@gmail.com" className="item-link">pavantheciso@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box">
                                    <FaPhoneAlt />
                                </div>
                                <div className="item-content">
                                    <span className="item-label">Phone</span>
                                    <span className="item-text">+91 7569711048</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info-group">
                        <h3 className="column-title">Connect With Me</h3>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/pavan-kalyan-pachipala-4589a6351" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Pa1-kalyan" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="https://leetcode.com/u/Pa1__kalyan/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <SiLeetcode />
                            </a>
                            <a href="https://www.instagram.com/its_me__kalyan/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Message Form */}
                <div className="contact-form-column">
                    <div className="form-card">
                        <h3 className="column-title">Send a Message</h3>
                        <form ref={form} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="user_name">Your Name</label>
                                <input type="text" id="user_name" name="user_name" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_email">Your Email</label>
                                <input type="email" id="user_email" name="user_email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Hi, I'd like to talk about..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary send-btn" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                                {!loading && <FaPaperPlane className="btn-icon-small" />}
                            </button>

                            {status === 'success' && <p className="status-message success">Message sent successfully! I'll get back to you soon.</p>}
                            {status === 'error' && <p className="status-message error">Failed to send message. Please try again later.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
