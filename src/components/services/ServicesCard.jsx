import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="service-icon">
      <i className={icon}></i>
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <a href="#" className="service-link">
      Learn more
      <i className="fas fa-arrow-right ms-2"></i>
    </a>
  </div>
);

export default ServiceCard;