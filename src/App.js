import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Scan from './pages/Scan';
import KnowledgeBase from './pages/KnowledgeBase';
import Result from './pages/Result';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
