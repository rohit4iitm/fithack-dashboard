import React from 'react';
import { Bar } from 'react-chartjs-2';
import { userData } from '../data';

const SleepTracking = () => {
  const sleepData = {
    labels: userData.sleepTracking.map(entry => entry.date),
    datasets: [
      {
        label: 'Hours of Sleep',
        data: userData.sleepTracking.map(entry => entry.hours),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Sleep Tracking</h2>
      <Bar data={sleepData} />
    </div>
  );
};

export default SleepTracking;
