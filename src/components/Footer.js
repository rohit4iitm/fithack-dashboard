import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const companyName = "Fithack.ae";
  const companyDescription = "Empowering users to track and achieve their health and wellness goals.";

  const features = [
    "Real-time Heart Rate Monitoring",
    "Calorie Tracking",
    "Workout History",
    "Personalized Recommendations",
    "Data-driven Insights"
  ];

  const customerServiceLinks = [
    "Contact Us",
    "Help Center",
    "Daily Plan Builder",
    "Blogs and information",
    "Track Your Fitness Journey"
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>About {companyName}</h2>
          <p>{companyDescription}</p>
        </div>

        <div className="footer-section">
          <h3>Features</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            {customerServiceLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
