import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { processSteps, features } from '../data';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      
      <section className="home__hero">
        <div className="home__hero-container">
          <div className="home__hero-content">
            <h1 className="home__hero-title">Verify Your Food the Halal Way</h1>
            <p className="home__hero-subtitle">Use AI-powered scanning to ensure your food meets Islamic dietary standards.</p>
            <button className="home__hero-cta">Start Scanning</button>
          </div>
          <div className="home__hero-visual">
            <img src="https://via.placeholder.com/500x400?text=Product+Visualization" alt="Halal product scanning" />
          </div>
        </div>
      </section>
      
      <section className="home__process">
        <div className="home__process-container">
          <h2 className="home__process-title">Verification in Seconds</h2>
          <div className="home__process-cards">
            {processSteps.map((step, index) => (
              <div key={index} className="home__process-card">
                <div className="home__process-icon">{step.icon}</div>
                <h3 className="home__process-card-title">{step.title}</h3>
                <p className="home__process-card-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="home__features">
        <div className="home__features-container">
          <h2 className="home__features-title">Why Purity Matters</h2>
          <div className="home__features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`home__features-card ${index === 0 ? 'home__features-card--large' : ''}`}>
                <div className="home__features-icon">{feature.icon}</div>
                <h3 className="home__features-card-title">{feature.title}</h3>
                <p className="home__features-card-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;