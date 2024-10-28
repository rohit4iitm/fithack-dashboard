import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { userData } from '../data';
import '../styles/Schedule.css';

const Schedule = () => {
  const sessions = userData.sessions;
  const sessionDates = sessions.map(session => new Date(session.date));

  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sessionsForSelectedDate = sessions.filter(
    session => new Date(session.date).toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="schedule">
      <h2>Scheduled Sessions</h2>
      
      <div className="schedule-container">
        <Calendar 
          onChange={setSelectedDate}
          value={selectedDate}
          tileClassName={({ date }) => {
            if (date.toDateString() === today.toDateString()) {
              return 'react-calendar__tile--now';
            }
            return sessionDates.some(d => d.toDateString() === date.toDateString()) ? 'highlight' : null;
          }} 
        />

        <div className="session-details">
          <h3>Sessions for {selectedDate.toDateString()}</h3>
          {sessionsForSelectedDate.length > 0 ? (
            <ul>
              {sessionsForSelectedDate.map(session => (
                <li key={session.id}>
                  <strong>{session.time}</strong> - {session.activity}
                </li>
              ))}
            </ul>
          ) : (
            <p>No sessions scheduled for this date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
