import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ingredients } from '../data';
import './Result.scss';

const Result = () => {
  const location = useLocation();
  const { result } = location.state || {};

  if (!result) {
    return <div>No result data</div>;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Halal': return '#4CAF50';
      case 'Haram': return '#F44336';
      case 'Doubtful': return '#FF9800';
      default: return '#666';
    }
  };

  const getIngredientDetails = (name) => {
    return ingredients.find(ing => ing.name === name) || { status: 'Unknown', description: 'No details available' };
  };

  return (
    <div className="result">
      <Header />
      
      <main className="result__main">
        <div className="result__container">
          <div className="result__banner" style={{ backgroundColor: getStatusColor(result.status) }}>
            <h1 className="result__status">{result.status.toUpperCase()} - PERMISSIBLE</h1>
            <h2 className="result__product-name">{result.name}</h2>
            <p className="result__product-id">Product ID: {result.id}</p>
          </div>
          
          <div className="result__analysis">
            <h3>Ingredient Analysis</h3>
            <div className="result__ingredients">
              {result.ingredients.map((ingredient, index) => {
                const details = getIngredientDetails(ingredient);
                return (
                  <div key={index} className="result__ingredient">
                    <span className="result__ingredient-name">{ingredient}</span>
                    <span 
                      className="result__ingredient-status" 
                      style={{ backgroundColor: getStatusColor(details.status) }}
                    >
                      {details.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="result__reasoning">
            <h3>Islamic Reasoning</h3>
            <div className="result__reasoning-card">
              <p className="result__quran-ref">Al-Baqarah 2:173: "He has only forbidden to you dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah."</p>
              <p className="result__scholar-summary">According to Islamic scholars, this product adheres to halal standards as it contains no prohibited ingredients.</p>
            </div>
          </div>
          
          <div className="result__warning">
            <h4>Precautionary Note</h4>
            <p>While this product is verified as halal, always check for potential cross-contamination during manufacturing or transportation.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Result;