import React from 'react';
import { healthData } from '../data/healthData';
import './styles/AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <h3 className="section-title">Health Overview</h3>
      <div className="anatomy-content">
        <div className="human-body-container">
          <div className="human-body">
            <div className="body-placeholder">Human Body</div>
            {/* Health indicators positioned around the body */}
            <div className="indicator indicator-heart">
              <div className="dot dot-green"></div>
            </div>
            <div className="indicator indicator-lungs">
              <div className="dot dot-red"></div>
            </div>
            <div className="indicator indicator-teeth">
              <div className="dot dot-green"></div>
            </div>
            <div className="indicator indicator-bone">
              <div className="dot dot-green"></div>
            </div>
          </div>
        </div>
        <div className="health-status-grid">
          {healthData.map((indicator) => (
            <div key={indicator.name} className="health-status-card">
              <div className="status-header">
                <div className={`status-dot ${indicator.color}`}></div>
                <span className="status-name">{indicator.name}</span>
              </div>
              <p className="status-date">Last checked: {indicator.lastChecked}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
