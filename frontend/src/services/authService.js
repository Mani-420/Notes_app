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

export const validateToken = async () => {
  const response = await get('/api/v1/users/me');
  return response.data;
};
