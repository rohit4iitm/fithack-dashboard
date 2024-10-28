import React from 'react';
import { Bar } from 'react-chartjs-2';
import { userData } from '../data';
import '../styles/SleepTracking.css';

const SleepTracking = () => {
  const sleepData = {
    labels: userData.sleepTracking.map(entry => entry.date),
    datasets: [
      {
        label: 'Hours of Sleep',
        data: userData.sleepTracking.map(entry => entry.hours),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 12,
        title: {
          display: true,
          text: 'Hours',
        },
      },
    },
  };

  // Example calculation for average sleep hours
  const averageSleep = userData.sleepTracking.reduce((sum, entry) => sum + entry.hours, 0) / userData.sleepTracking.length;

  return (
    <div className="sleep-tracking">
      <h2>Sleep Tracking</h2>
      <Bar data={sleepData} options={options} />
      <div className="data-summary">
        <div>
          <h3>Average Sleep</h3>
          <p>{averageSleep.toFixed(1)} hours</p>
        </div>
        <div>
          <h3>Days Tracked</h3>
          <p>{userData.sleepTracking.length} days</p>
        </div>
      </div>
    </div>
  );
};

export default SleepTracking;
