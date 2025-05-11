import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice/authSlice';
import axios from 'axios';

// Simplified Navbar
const Navbar = () => {
  const { status, userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      // Call your logout API
      const response = await axios.post(
        'http://localhost:8080/api/users/logout',
        {},
        {
          withCredentials: true
        }
      );
      if (response.status === 200) {
        dispatch(logout());
        navigate('/login');
      }
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Notes App
            </span>
          </Link>
        </div>

        <div className="flex items-center">
          {status && userData ? (
            <ProfileInfo userData={userData} onLogout={handleLogout} />
          ) : (
            <div className="flex space-x-2">
              <Link
                to="/login"
                className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white"
              >
                Sign Up
              </Link>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="w-full md:hidden">
          <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            {status && userData ? (
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <button onClick={handleLogout} className="w-full text-left">
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
