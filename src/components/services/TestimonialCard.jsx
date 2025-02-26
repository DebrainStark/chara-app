import React from 'react';

const TestimonialCard = ({ quote, client, company, image }) => (
  <div className="testimonial-card h-100">
    <div className="testimonial-content">
      <div className="quote-icon">
        <i className="fas fa-quote-left"></i>
      </div>
      <p className="testimonial-text">{quote}</p>
      <div className="testimonial-author">
        <img 
          src={image} 
          alt={client} 
          className="testimonial-avatar"
        />
        <div>
          <h5 className="author-name">{client}</h5>
          <p className="author-title">{company}</p>
        </div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;