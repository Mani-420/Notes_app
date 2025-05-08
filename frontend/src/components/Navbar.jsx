import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery('');
  };

  const onLogout = () => {
    navigate('/login');
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

          <SearchBar
            value={searchQuery}
            onChange={({ target }) => setSearchQuery(target.value)}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
          <ProfileInfo onLogout={onLogout} />

          {/* Mobile menu button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden absolute w-full left-0 mt-2 p-4 bg-gray-900 border border-neutral-700 rounded-md">
            <div className="flex flex-col space-y-3"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
