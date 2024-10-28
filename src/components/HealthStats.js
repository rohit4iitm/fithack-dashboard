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
import '../styles/HealthStats.css';

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
        borderColor: '#4a90e2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        fill: true,
      },
    ],
  };

  const heartRateData = {
    labels: heartRateEvolution.map(entry => entry.intensity),
    datasets: [
      {
        label: 'Heart Rate (bpm)',
        data: heartRateEvolution.map(entry => entry.heartRate),
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
      },
    ],
  };

  const weightOptions = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="health-stats-container">
      <h2>Health Dashboard</h2>
      
      <div className="stats-summary">
        <div className="stat-card">
          <h3>Current Weight</h3>
          <p>{currentWeight} kg</p>
        </div>
        <div className="stat-card">
          <h3>Body Fat %</h3>
          <p>{bodyFatPercentage}%</p>
        </div>
        <div className="stat-card">
          <h3>BMI</h3>
          <p>{bmi}</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart-container">
          <h3>Weight Over Time</h3>
          <Line data={weightData} options={weightOptions} />
        </div>
        <div className="chart-container">
          <h3>Heart Rate by Intensity</h3>
          <Bar data={heartRateData} />
        </div>
      </div>
    </div>
  );
};

export default HealthStats;
