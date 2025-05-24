import React from 'react';
import { calendarData } from '../data/calendarData';
import './styles/CalendarView.css';

const CalendarView = () => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const appointmentDays = [5, 12, 18, 25];

  return (
    <div className="calendar-view">
      <h3 className="calendar-title">October 2021</h3>
      <div className="calendar-grid">
        <div className="calendar-header">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
            <div key={day} className="calendar-day-header">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-days">
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`calendar-day ${
                appointmentDays.includes(day) ? 'calendar-day-appointment' : ''
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="appointment-details">
        {calendarData.appointments.map((appointment, index) => (
          <div key={index} className={`appointment-card ${appointment.type}`}>
            <h4 className="appointment-title">{appointment.title}</h4>
            <p className="appointment-time">{appointment.date} - {appointment.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;