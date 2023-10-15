import React from 'react';
import image1 from './Images/images.jpg'
import image2 from './Images/images2.jpg';
import image3 from './Images/images5.jpg';
const Sliding = ({ isDarkTheme }) => {
  const carouselClass = isDarkTheme ? 'carousel slide bg-dark' : 'carousel slide bg-light';

  return (
    <div className={`d-flex justify-content-center align-items-center ${carouselClass}`} style={{ height: '90vh' }}>
      <div id="carouselExampleAutoplaying" className={`carousel slide ${carouselClass}`} data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block mx-auto img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block mx-auto img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block mx-auto img-fluid" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Sliding;
