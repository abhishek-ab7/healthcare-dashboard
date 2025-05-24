import React from 'react';
import { activityData } from '../data/activityData';
import './styles/ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3 className="activity-title">Activity</h3>
      <div className="activity-content">
        <p className="activity-summary">{activityData.summary}</p>
        <div className="activity-chart">
          <div className="chart-container">
            {activityData.chartData.map((data, index) => (
              <div key={index} className="chart-bar">
                <div 
                  className="bar" 
                  style={{ height: `${data.value}%` }}
                ></div>
                <span className="bar-label">{data.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;