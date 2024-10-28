import React from 'react';
import { userData } from '../data';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/SelfWorkTracking.css'; 

const SelfWorkTracking = () => {
  const totalSessions = userData.selfWorkTracking.totalSessions;
  const targetSessions = 20;

  const completionPercentage = (totalSessions / targetSessions) * 100;

  return (
    <div className="self-work-tracking">
      <h2>Self-Work Tracking</h2>
      <div className="progress-container">
        <CircularProgressbar 
          value={completionPercentage} 
          text={`${totalSessions}/${targetSessions}`} 
          styles={buildStyles({
            textSize: '16px',
            textColor: '#3e98c7',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <p>Sessions Completed with FitHack</p>
    </div>
  );
};

export default SelfWorkTracking;
