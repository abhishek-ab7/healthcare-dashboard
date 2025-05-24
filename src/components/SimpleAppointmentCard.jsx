import React from 'react';
import './styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, type }) => {
  return (
    <div className="appointment-card">
      <div className="appointment-info">
        <h4 className="appointment-title">{title}</h4>
        <p className="appointment-time">{time}</p>
      </div>
      <div className={`appointment-indicator ${type === 'completed' ? 'completed' : 'scheduled'}`}></div>
    </div>
  );
};

export default SimpleAppointmentCard;