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
    <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-3 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl">Notes App</h1>
          </Link>

          {status && userData ? (
            <ProfileInfo userData={userData} onLogout={handleLogout} />
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-700"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden absolute w-full left-0 mt-2 p-4 bg-gray-900 border border-neutral-700 rounded-md">
            <div className="flex flex-col space-y-3">
              {/* Mobile menu items */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
