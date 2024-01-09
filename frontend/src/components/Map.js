import React from 'react';
import image1 from './Images/images.jpg';


function Map() {
  const iframeClassName = 'light-map';
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    padding: '0 20px',
  
  };

  const iframeStyle = {
    border: '0',
    width: '800px',
    height: '600px',
    marginLeft: '200px',
    marginTop: '50px',
  };

  const img2 = {
    border: '0',
    width: '800px',
    height: '600px',
    marginLeft: '600px',
    marginTop: '200px',
  };
  const bg ={
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
    height: '400vh',
    
    
}

  return (
    <>
      <body style={bg}>
      <div className={`col-md-3 my-3 ${iframeClassName}`} style={containerStyle}>
        <div style={{ alignSelf: 'flex-start' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1703778090324!6m8!1m7!1sCAoSLEFGMVFpcE5hd3J0clNQU1FYNE50T0x5WEZTSVIwbFBhT2Q0ZEpNaXpyNF9L!2m2!1d19.0201595!2d72.855392!3f155.948272605997!4f9.280233890183055!5f0.7820865974627469"
            style={iframeStyle}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Content on top of the background */}
          <div>
            <img src={image1} style={img2} alt="Image 1" />
          </div>
          <div>
            <img src={image1} style={iframeStyle} alt="Image 2" />
          </div>
          <div>
            <img src={image1} style={img2} alt="Image 3" />
          </div>
        </div>
      </div>
      </body>
    </>
  );
}

export default Map;