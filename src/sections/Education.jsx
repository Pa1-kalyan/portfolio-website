import './Education.css';
import EducationVisual from '../components/EducationVisual';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container education-container">
                <div className="education-content">
                    <h2 className="section-title education-title">
                        <FaGraduationCap className="title-icon" /> Education
                    </h2>
                    <div className="education-card">
                        <h3 className="institution">Bharath Institute of Higher Education and Research</h3>
                        <div className="degree-info">
                            <h4 className="degree">Bachelor of Technology (B.Tech)</h4>
                            <p className="branch">Computer Science and Engineering</p>
                        </div>
                        <span className="duration">Apr 2020 – Jul 2024</span>
                    </div>
                </div>

                <div className="education-visual">
                    <EducationVisual />
                </div>
            </div>
        </section>
    );
};

export default Education;
