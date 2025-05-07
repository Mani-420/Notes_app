// src/services/authService.js
import { post, get } from './api';

export const login = async (credentials) => {
  const response = await post('/api/v1/users/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await post('/api/v1/users/register', userData);
  return response.data;
};

export const logout = async () => {
  try {
    localStorage.removeItem('token');

    return { success: true };
  } catch (error) {
    // Even if API call fails, still clear token
    localStorage.removeItem('token');
    console.error('Logout error:', error);
    throw error;
  }
};

export const validateToken = async () => {
  const response = await get('/api/v1/users/me');
  return response.data;
};
