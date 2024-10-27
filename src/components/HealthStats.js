import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { userData } from '../data';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const HealthStats = () => {
  const { currentWeight, bodyFatPercentage, bmi, weightHistory, heartRateEvolution } = userData.healthStats;

  const weightData = {
    labels: weightHistory.map(entry => entry.month),
    datasets: [
      {
        label: 'Weight (kg)',
        data: weightHistory.map(entry => entry.weight),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
      },
    ],
  };

  const heartRateData = {
    labels: heartRateEvolution.map(entry => entry.intensity),
    datasets: [
      {
        label: 'Heart Rate (bpm)',
        data: heartRateEvolution.map(entry => entry.heartRate),
        backgroundColor: ['green', 'yellow', 'red'],
      },
    ],
  };

  return (
    <div>
      <h2>Health Stats</h2>
      <p>Current Weight: {currentWeight} kg</p>
      <p>Body Fat Percentage: {bodyFatPercentage}%</p>
      <p>BMI: {bmi}</p>
      <Line data={weightData} />
      <Bar data={heartRateData} />
    </div>
  );
};

export default HealthStats;
