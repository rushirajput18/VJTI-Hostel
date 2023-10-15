import React from 'react';

function Map({ isDarkTheme }) {
  // Define the class name and style based on the isDarkTheme prop
  const iframeClassName = isDarkTheme ? 'dark-map' : 'light-map';
  const iframeStyle = {
    border: '0',
    // Add other common styles here
  };

  return (
    <div className={`col-md-3 my-3 ${iframeClassName}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2065.859507751632!2d72.85454516663545!3d19.0201895049394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694450453938!5m2!1sen!2sin"
        width="600"
        height="450"
        style={iframeStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
}

export default Map;
