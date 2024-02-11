import React from "react";
import image1 from "./Images/images.jpg";
import image2 from "./Images/Abhay-Bambole.jpg";
import image3 from "./Images/soo.jpg";
import "./css/About.css"; // Create a separate CSS file for styling
export default function AboutVJTI() {
  return (
    <>
      <div id="aboutSection" className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About VJTI Hostel</h2>
            <div>
            <img src={image1} alt="Profile" style={{marginLeft:'200px' ,width:'700px'}}/>
          </div>
            <p>
              Veermata Jijabai Technological Institute (VJTI) is one of the
              premier engineering colleges in Mumbai, India. It is located in
              Matunga, a suburb in central Mumbai. VJTI has a hostel facility
              for its students who come from various parts of the country to
              pursue their education. <br />
              <br />
              The VJTI hostel in Matunga provides accommodation for both male
              and female students. The hostel aims to create a conducive
              environment for academic pursuits while also fostering a sense of
              community among the residents. It typically offers basic amenities
              such as lodging, dining facilities, internet connectivity,
              recreational areas, and study spaces.
              <br />
              <br />
              The hostel life at VJTI is known for its camaraderie among
              students and for providing a platform for intellectual and
              personal growth. It allows students to interact with peers from
              diverse backgrounds, fostering cultural exchange and lifelong
              friendships.
              <br />
              <br />
              Overall, the VJTI hostel in Matunga plays an integral role in the
              college experience for many students, providing them with a
              supportive living environment as they pursue their academic goals.{" "}
            </p>
            <div className="contact-info">
              <b>hosteladmin@vjti.ac.in</b> <br/>
              <b>+91 9876543210</b>
            </div>
          </div>
          
         
         
        </div>
      </div>
    </>
  );
}
