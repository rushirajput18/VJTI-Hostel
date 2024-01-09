import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import About from './About';
import { useNavigate } from 'react-router-dom';
import vdo from './Images/videoplayback.mp4';

const Sliding = () => {
  const navigate = useNavigate();

  const videoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-1',
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '95vh', // Adjust this for the desired height
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '25%', // Positioned on the left quarter
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '25%',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
  };

  const linkStyle = {
    display: 'block',
    textDecoration: 'none',
    color: 'white',
    marginBottom: '10px', // Gap between list items
    borderTop: '1px solid teal', // Teal border added here
    paddingTop: '10px',
    // Added hover style
    ':hover': {
      backgroundColor: '#7d2ae8', 
    },
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '10px',
  };

  const columnsStyle = {
    display: 'block',
    paddingTop: '10px',
    marginTop: '10px',
    color: 'white',
  };

  const handleScrollToAbout = () => {
    // Assuming "aboutSection" is the ID of the element in About.js
    scroll.scrollToBottom();
  };

  const handleNavigateToAdmission = () => {
    // Navigate to the "/admission" route
    navigate('/admission');
  };

  const handleNavigateToMap = () => {
    // Navigate to the "/map" route
    navigate('/map');
  };

  return (
    <>
      <div style={containerStyle}>
        <video src={vdo} autoPlay muted loop playsInline style={videoStyle} />
        <div style={overlayStyle}>
          <div style={headingStyle}>VJTI Hostel</div>
          <div style={columnsStyle}>
          <a
  className="nav-link"
  href="http://127.0.0.1:5500/VJTI-Hostel/frontend/src/components/form/index.html"
  style={linkStyle}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#7d2ae8';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '';
  }}
>
  Admissions
</a>
            {/* <button
              className="nav-link"
              onClick={handleNavigateToAdmission}
              style={linkStyle}
            >
              Admissions
            </button> */}
            <Link
              className="nav-link"
              onClick={handleNavigateToMap}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#7d2ae8';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '';
              }}
            >
              Virtual Tour
            </Link>
            {/* Use react-scroll to smoothly scroll to the "About Us" section */}
            <Link
              className="nav-link"
              to="aboutSection"
              style={linkStyle}
              onClick={handleScrollToAbout}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#7d2ae8';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '';
              }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Sliding;
