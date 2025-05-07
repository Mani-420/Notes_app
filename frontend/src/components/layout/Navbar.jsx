// src/components/layout/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl text-cyan-400">
            Notes
          </Link>

          {/* App Title */}
          <div className="text-xl font-semibold hidden sm:block">NotesApp</div>

          {/* Auth Links */}
          <div>
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200"
              >
                Logout
              </button>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-cyan-500 hover:bg-cyan-600 py-2 px-4 rounded transition duration-200"
                >
                  Create Account
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
