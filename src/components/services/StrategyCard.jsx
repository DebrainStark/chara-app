import React from 'react';

const StrategyCard = ({ number, title, description, icon }) => (
  <div className="strategy-card">
    <div className="strategy-number">{number}</div>
    <div className="strategy-icon">
      <i className={icon}></i>
    </div>
    <h3 className="strategy-title">{title}</h3>
    <p className="strategy-description">{description}</p>
  </div>
);

export default StrategyCard;