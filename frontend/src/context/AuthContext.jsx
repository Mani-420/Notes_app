// src/context/AuthContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Logged-in user data
  const [loading, setLoading] = useState(true);

  // Check if token is in localStorage on first load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${storedUser.token}`;
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    const res = await axios.post('http://localhost:5000/api/users/login', {
      email,
      password
    });
    setUser(res.data);
    localStorage.setItem('user', JSON.stringify(res.data));
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
  };

  // Register function
  const register = async (name, email, password) => {
    const res = await axios.post('http://localhost:5000/api/users/register', {
      name,
      email,
      password
    });
    setUser(res.data);
    localStorage.setItem('user', JSON.stringify(res.data));
    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
