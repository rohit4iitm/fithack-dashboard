export const userData = {
    healthStats: {
      currentWeight: 70, // kg
      bodyFatPercentage: 20, // %
      bmi: 22.8,
      weightHistory: [
        { month: 'January', weight: 72 },
        { month: 'February', weight: 71 },
        { month: 'March', weight: 70.5 },
        { month: 'April', weight: 70 },
        { month: 'May', weight: 69.5 },
        { month: 'June', weight: 70 },
      ],
      heartRateEvolution: [
        { intensity: 'Low', heartRate: 90 },
        { intensity: 'Medium', heartRate: 110 },
        { intensity: 'High', heartRate: 130 },
      ],
    },
    goals: [
      { id: 1, name: 'Run 5km', progress: 70 }, // %
      { id: 2, name: 'Lose 5kg', progress: 50 }, // %
      { id: 3, name: 'Increase muscle mass', progress: 40 }, // %
      { id: 4, name: 'Complete 20 sessions', progress: 15 }, // %
    ],
    sessions: [
      { id: 1, date: '2024-06-20', time: '10:00 AM', activity: 'Yoga' },
      { id: 2, date: '2024-06-22', time: '2:00 PM', activity: 'Cardio' },
      { id: 3, date: '2024-06-24', time: '6:00 PM', activity: 'Strength Training' },
    ],
    sleepTracking: [
      { date: '2024-06-01', hours: 7 },
      { date: '2024-06-02', hours: 6 },
      { date: '2024-06-03', hours: 8 },
      { date: '2024-06-04', hours: 5 },
      // ... more data for the past month
    ],
    selfWorkTracking: {
      totalSessions: 3,
    },
  };
