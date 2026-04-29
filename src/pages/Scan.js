import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data';
import './Scan.scss';

const Scan = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      startScanning(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      startScanning(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const startScanning = (file) => {
    setIsScanning(true);
    // Mock scanning with FileReader
    const reader = new FileReader();
    reader.onload = () => {
      // Simulate API delay
      setTimeout(() => {
        // Mock result - in real app, this would be from AI analysis
        const mockResult = products[Math.floor(Math.random() * products.length)];
        setScanResult(mockResult);
        setIsScanning(false);
        // Navigate to result page
        navigate('/result', { state: { result: mockResult } });
      }, 3000);
    };
    reader.readAsDataURL(file);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="scan">
      <Header />
      
      <main className="scan__main">
        <div className="scan__container">
          <h1 className="scan__title">Scan Product</h1>
          
          <div className="scan__uploader">
            <div 
              className="scan__drop-zone" 
              onDrop={handleDrop} 
              onDragOver={handleDragOver}
              onClick={openFileDialog}
            >
              <div className="scan__camera-icon">📷</div>
              <p className="scan__drop-text">Drag & drop an image or click to select</p>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileSelect} 
                accept="image/*" 
                capture="environment"
                style={{ display: 'none' }} 
              />
            </div>
            
            <div className="scan__buttons">
              <button className="scan__button" onClick={openFileDialog}>Choose File</button>
              <button className="scan__button scan__button--camera" onClick={openFileDialog}>Live Camera</button>
            </div>
          </div>
          
          {isScanning && (
            <div className="scan__scanning">
              <div className="scan__spinner"></div>
              <p>Analyzing ingredients...</p>
            </div>
          )}
          
          <div className="scan__instructions">
            <h2>Preparation Tips</h2>
            <ul>
              <li>Ensure the product label is clearly visible</li>
              <li>Take photo in good lighting</li>
              <li>Include all ingredient information</li>
            </ul>
          </div>
          
          <div className="scan__history">
            <h2>Recent Verification History</h2>
            <div className="scan__history-list">
              {products.slice(0, 3).map((product) => (
                <div key={product.id} className="scan__history-item">
                  <img src={product.image} alt={product.name} />
                  <div className="scan__history-info">
                    <h3>{product.name}</h3>
                    <p>Status: {product.status}</p>
                    <p>{new Date(product.timestamp).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Scan;