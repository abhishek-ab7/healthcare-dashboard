import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { scheduleData } from '../data/scheduleData';
import './styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      <div className="schedule-content">
        {Object.entries(scheduleData).map(([day, appointments]) => (
          <div key={day} className="schedule-day">
            <h4 className="day-title">{day}</h4>
            <div className="appointments-list">
              {appointments.map((appointment, index) => (
                <SimpleAppointmentCard
                  key={index}
                  title={appointment.title}
                  time={appointment.time}
                  type={appointment.type}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;