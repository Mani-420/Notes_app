// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Your backend URL

// Create axios instance with proper base URL
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true // For cookies if using
});

// Add auth header interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const post = async (url, data) => {
  try {
    return await api.post(url, data);
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
