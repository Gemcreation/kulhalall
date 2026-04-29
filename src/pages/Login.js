import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Auth.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login
    console.log('Login:', { email, password });
  };

  return (
    <div className="auth">
      <Header />
      
      <main className="auth__main">
        <div className="auth__container">
          <h1 className="auth__title">Login</h1>
          <form className="auth__form" onSubmit={handleSubmit}>
            <div className="auth__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="auth__field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="auth__submit">Login</button>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;