import React, { useState, useEffect } from 'react';

const ComingSoonPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Set visibility when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="py-5 min-vh-100 d-flex align-items-center" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {/* Company Logo */}
            <div className="mb-4">
              <img 
                src="logo1.png" 
                alt="Company Logo" 
                className="img-fluid" 
                style={{ maxHeight: "100px" }}
              />
            </div>
            
            {/* Main content */}
            <h1 className="display-4 fw-bold mb-3">Something Amazing Is Coming Soon</h1>
            <p className="lead text-muted mb-5">
              We're working hard to bring you our new digital marketing platform. 
              In the meantime, book a strategy call with our team to learn more about our services.
            </p>
            
            {/* Calendly CTA button */}
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mb-5">
              <a 
                href="https://calendly.com/your-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Book a Strategy Call
              </a>
            </div>
            
            {/* Countdown timer */}
            <div className="row g-4 justify-content-center">
              {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, index) => (
                <div key={index} className="col-3 col-md-2">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body py-3">
                      <h2 className="fw-bold mb-0">{index === 0 ? 14 : index === 1 ? 22 : index === 2 ? 36 : 15}</h2>
                      <p className="small text-muted mb-0">{unit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonPage;