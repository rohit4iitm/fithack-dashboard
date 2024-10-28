import React from 'react';
import Slider from 'react-slick'; 
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const userName = "John Doe"; 
  const userEmail = "john.doe@example.com";
  const companyName = "HealthTracker Inc.";
  const companyDescription = `At ${companyName}, we are committed to providing users with the tools and insights needed to reach their health goals. 
  Our platform leverages data analytics, machine learning, and expert recommendations to support users in making informed health decisions.
  With our personalized approach, we make it simple to track progress, set achievable goals, and stay motivated.`;

  const features = [
    {
      title: "Real-time Heart Rate Monitoring",
      description: "Monitor your heart rate in real-time to optimize your workout intensity and stay in the zone.",
      image: "/fitness.avif" 
    },
    {
      title: "Calorie Tracking",
      description: "Easily track your daily caloric intake and expenditure to stay on top of your nutrition goals.",
      image: "/calories.avif" 
    },
    {
      title: "Workout History",
      description: "Analyze your workout history and see your progress over time to stay motivated.",
      image: "/calender.webp" 
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="dashboard">
      
      <section className="fitness-features">
        <Slider {...settings} className="features-carousel">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <img src={feature.image} alt={feature.title} className="feature-image"/>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </Slider>
      </section>
      
      <section className="user-info">
        <h2 className="section-title">User Information</h2>
        <p className="info-text"><strong>Name:</strong> {userName}</p>
        <p className="info-text"><strong>Email:</strong> {userEmail}</p>
      </section>

      <section className="company-info">
        <h2 className="section-title">About {companyName}</h2>
        <p className="company-description">{companyDescription}</p>
      </section>
    </div>
  );
};

export default Dashboard;
