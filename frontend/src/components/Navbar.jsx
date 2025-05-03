import React from 'react';
import notes from '../assets/notes.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10" src={notes} alt="company logo" />
          </div>
          <div>
            <h1 className="text-2xl">Notes App</h1>
          </div>
          <div className="hidden lg:flex justify-center space-x-5 items-center">
            <a className="py-2 px-3 border rounded-md" href="#">
              Signin
            </a>
            <a
              className="bg-cyan-400 py-2 px-3 rounded-md hover:bg-cyan-600 transition duration-300"
              href="#"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
