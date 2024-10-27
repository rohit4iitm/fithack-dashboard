import React from 'react';
import Calendar from 'react-calendar';
import { userData } from '../data';

const Schedule = () => {
  const sessions = userData.sessions;
  const sessionDates = sessions.map(session => new Date(session.date));

  return (
    <div>
      <h2>Scheduled Sessions</h2>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>
            {session.date} - {session.time} - {session.activity}
          </li>
        ))}
      </ul>
      <Calendar tileClassName={({ date }) => 
        sessionDates.some(d => d.toDateString() === date.toDateString()) ? 'highlight' : null
      } />
    </div>
  );
};

export default Schedule;
