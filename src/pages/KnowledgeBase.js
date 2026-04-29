import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ingredients } from '../data';
import './KnowledgeBase.scss';

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Halal', 'Haram', 'Doubtful'];

  const filteredIngredients = ingredients.filter(ingredient => {
    const matchesSearch = ingredient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || ingredient.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Halal': return '#4CAF50';
      case 'Haram': return '#F44336';
      case 'Doubtful': return '#FF9800';
      default: return '#666';
    }
  };

  return (
    <div className="knowledge-base">
      <Header />
      
      <main className="knowledge-base__main">
        <div className="knowledge-base__container">
          <h1 className="knowledge-base__title">Knowledge Base</h1>
          
          <div className="knowledge-base__search">
            <input
              type="text"
              placeholder="Search ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="knowledge-base__search-input"
            />
          </div>
          
          <div className="knowledge-base__filters">
            {filters.map(filter => (
              <button
                key={filter}
                className={`knowledge-base__filter ${selectedFilter === filter ? 'knowledge-base__filter--active' : ''}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          
          <div className="knowledge-base__grid">
            {filteredIngredients.map(ingredient => (
              <div key={ingredient.id} className="knowledge-base__card">
                <div 
                  className="knowledge-base__status-badge" 
                  style={{ backgroundColor: getStatusColor(ingredient.status) }}
                >
                  {ingredient.status}
                </div>
                <h3 className="knowledge-base__card-title">{ingredient.name}</h3>
                <p className="knowledge-base__card-description">{ingredient.description}</p>
                <a href="#" className="knowledge-base__learn-more">Learn more</a>
              </div>
            ))}
          </div>
          
          <div className="knowledge-base__request">
            <h2>Didn't find what you're looking for?</h2>
            <p>Help us expand our knowledge base by requesting a review or submitting evidence.</p>
            <div className="knowledge-base__request-buttons">
              <button className="knowledge-base__request-button">Request Review</button>
              <button className="knowledge-base__request-button knowledge-base__request-button--secondary">Submit Evidence</button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KnowledgeBase;