// src/components/AuthPage.js
import React, { useState } from 'react';
import AuthForm from './AuthForm';
import "../AuthPage/AuthPage.css"

const AuthPage = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleAuthSubmit = (formData) => {
    // Perform sign-in/sign-up logic (e.g., API call) here
    console.log(`${isSigningUp ? 'Signing Up' : 'Signing In'} with`, formData);
  };

  return (
    <div className="auth-page">
      <AuthForm type={isSigningUp ? 'signup' : 'signin'} onSubmit={handleAuthSubmit} />
      <p>
        {isSigningUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={() => setIsSigningUp(!isSigningUp)}>
          {isSigningUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
