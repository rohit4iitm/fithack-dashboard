import React from 'react';
import { userData } from '../data';

const Goals = () => {
  const goals = userData.goals;

  return (
    <div>
      <h2>Fitness Goals</h2>
      {goals.map(goal => (
        <div key={goal.id}>
          <p>{goal.name}: {goal.progress}%</p>
          <progress value={goal.progress} max="100"></progress>
        </div>
      ))}
      <button>Add New Goal</button>
    </div>
  );
};

export default Goals;
