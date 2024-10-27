import React from 'react';
import { userData } from '../data';

const SelfWorkTracking = () => {
  return (
    <div>
      <h2>Self-Work Tracking</h2>
      <p>Total Sessions with FitHack: {userData.selfWorkTracking.totalSessions}</p>
    </div>
  );
};

export default SelfWorkTracking;
