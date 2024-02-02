// SignIn.js
import React, { useState } from 'react';
import './login.css'; // Import your CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    // Add your authentication logic here
    // For simplicity, let's assume a basic check
    if (username === 'user' && password === 'password') {
      setErrorMessage(''); // Clear previous error messages
      alert('Sign in successful!');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="signin-container">
        <img src="xiaomi_logo.png" alt="Xiaomi Logo" className="logo" />
        <h2>Sign In</h2>
        <form>
          <label htmlFor="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="button" onClick={handleSignIn}>Sign In</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
