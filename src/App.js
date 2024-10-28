import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HealthStats from './components/HealthStats';
import Goals from './components/Goals';
import Schedule from './components/Schedule';
import SleepTracking from './components/SleepTracking';
import SelfWorkTracking from './components/SelfWorkTracking';
import Footer from './components/Footer'; 
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/health-stats">Health Stats</Link>
          <Link to="/goals">Goals</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/sleep-tracking">Sleep Tracking</Link>
          <Link to="/self-work-tracking">Self Work Tracking</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/health-stats" element={<HealthStats />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sleep-tracking" element={<SleepTracking />} />
          <Route path="/self-work-tracking" element={<SelfWorkTracking />} />
        </Routes>

        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
