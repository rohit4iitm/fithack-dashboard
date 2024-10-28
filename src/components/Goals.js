import React from 'react';
import '../styles/Goals.css';

const Goals = () => {
  const goals = [
    { id: 1, name: 'Run 5km', progress: 70 },
    { id: 2, name: 'Lose 5kg', progress: 50 },
    { id: 3, name: 'Increase muscle mass', progress: 40 },
    { id: 4, name: 'Complete 20 sessions', progress: 15 },
  ];

  return (
    <div className="goals">
      <h3>Fitness Goals</h3>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id} className="goal-item">
            <span>{goal.name}</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${goal.progress}%` }}>
                {goal.progress}%
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
