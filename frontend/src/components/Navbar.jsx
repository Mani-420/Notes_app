import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import notes from '../assets/notes.png';
import { Menu, X, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // This should come from your auth context in a real app
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Here you would implement your logout logic:
    // - Clear tokens/cookies
    // - Update auth context
    // - Redirect user

    // For now, just toggle the mock state and navigate to home
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10" src={notes} alt="company logo" />
          </Link>
          <Link to="/">
            <h1 className="text-2xl">Notes App</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center space-x-5 items-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 py-2 px-3 border border-gray-700 rounded-md hover:border-red-500 hover:text-red-400 transition-colors"
              >
                <LogOut size={18} />
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="py-2 px-3 border border-gray-700 rounded-md hover:border-cyan-600"
                >
                  Signin
                </Link>
                <Link
                  to="/register"
                  className="bg-cyan-600 py-2 px-3 rounded-md hover:bg-cyan-700 transition duration-300 text-white"
                >
                  Create an Account
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden absolute w-full left-0 mt-2 p-4 bg-gray-900 border border-neutral-700 rounded-md">
            <div className="flex flex-col space-y-3">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 py-2 px-3 border border-gray-700 rounded-md hover:border-red-500 hover:text-red-400"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="py-2 px-3 border border-gray-700 rounded-md text-center"
                  >
                    Signin
                  </Link>
                  <Link
                    to="/register"
                    className="bg-cyan-600 py-2 px-3 rounded-md text-center"
                  >
                    Create an Account
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
