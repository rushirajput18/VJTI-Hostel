import React from 'react';
import image1 from './Images/images.jpg';
import image2 from './Images/Abhay-Bambole.jpg';
import image3 from './Images/soo.jpg';
import './css/About.css'; // Create a separate CSS file for styling

const About = () => {
    return (
        <div id="aboutSection" className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>
                        VJTI hostels Matunga campus has completed its glorios 100 years, and continuing the legacy
                    </p>
                    <div className="contact-info">
                        <p>Email: hosteladmin@vjti.ac.in</p>
                        <p>Phone: +91 9876543210</p>
                    </div>
                </div>
                <div className="about-image">
                    <img src={image1} alt="Profile" />
                </div>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <h2>Chief Rector - Hostel</h2>
                    <h3>Dr. A. N. Bambole</h3>
                    <p>
                        Professor, Structural Engineering Department
                        Veermata Jijabai Technological Institute, Mumbai, INDIA
                        anbambole[AT]st.vjti.ac.in
                        Visiting Professor, Mechanical Engineering Department, (November 2017 to January 2018)
                        Texas A  M University, Colleges Station, TX, USA
                    </p>
                    <div className="contact-info">
                        <p>Email: anbambole@st.vjti.ac.in</p>
                        <p>Phone: +91 9876543210</p>
                    </div>
                </div>
                <div className="about-image">
                    <img src={image2} alt="Profile" />
                </div>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <h2>Rector - Hostel</h2>
                    <h3>Dr. Vinod B. Suryawanshi</h3>
                    <p>
                    Assistant Professor, Mechanical Engineering Department,
Veermata Jijabai Technological Institute (VJTI), Mumbai
Phone (Office): 022-24198223, Mobile: 7506111219

                    </p>
                    <div className="contact-info">
                        <p>Email: anbambole@st.vjti.ac.in</p>
                        <p>Phone: +91 9876543210</p>
                    </div>
                </div>
                <div className="about-image">
                    <img src={image3} alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default About;
