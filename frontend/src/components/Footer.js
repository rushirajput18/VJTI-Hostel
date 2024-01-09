import React from 'react';

const Footer = () => {
  return (
    <div className="footer" style={{ width: '100%', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <div className="copyright" style={{ fontWeight: 'bold' }}>
        <p style = {{ fontSize: '24px'}}>&copy; 2024 vjtihostel.com All rights reserved.</p>
      </div>
      <div className="social-media" style={{ fontSize: '16px', marginTop: '20px' }}>
        <p style = {{ fontSize: '20px'}}>Connect with us:</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg" alt="Instagram" style={{ width: '60px', marginRight: '100px' }} />
          </a>
          <a href="https://X.com" target="_blank" rel="noopener noreferrer">
            <img src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" alt="Twitter" style={{ width: '90px', marginRight: '10px' }} />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
