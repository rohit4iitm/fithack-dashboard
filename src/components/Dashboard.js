import React from 'react';
import HealthStats from './HealthStats';
import Goals from './Goals';
import Schedule from './Schedule';
import SleepTracking from './SleepTracking';
import SelfWorkTracking from './SelfWorkTracking';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <HealthStats />
      <Goals />
      <Schedule />
      <SleepTracking />
      <SelfWorkTracking />
    </div>
  );
};

export default Dashboard;
