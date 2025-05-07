// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { login, register } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token or get user info
      // For now, just set that we have a user
      setCurrentUser(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = async (credentials) => {
    const data = await login(credentials);
    localStorage.setItem('token', data.token);
    setCurrentUser(data.user);
    return data;
  };

  const handleRegister = async (userData) => {
    const data = await register(userData);
    localStorage.setItem('token', data.token);
    setCurrentUser(data.user);
    return data;
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
    logout();
  };

  const value = {
    currentUser,
    loading,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    isAuthenticated: !!currentUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
