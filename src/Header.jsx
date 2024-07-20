import React, { useState } from 'react';
import logo from '../src/assets/Logo.jpg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex md:justify-around jusjustify-between items-center py-3 px-4 bg-white shadow-md '>
      <div>
        <Link to="/">
          <img src={logo} className='w-auto h-12 object-cover' alt="Logo" />
        </Link>
      </div>
      <div className='sm:hidden'>
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
        </button>
      </div>
      <div className={`sm:flex ${isOpen ? 'flex' : 'hidden'} flex-col sm:flex-row gap-4 sm:gap-6`}>
        <Link to="/" className='text-gray-800 hover:text-blue-600 '>Home</Link>
        <Link to="/about" className='text-gray-800 hover:text-blue-600 '>About</Link>
        <Link to='/product' className='text-gray-800 hover:text-blue-600 '>Product</Link>
        <Link to='/contact' className='text-gray-800 hover:text-blue-600 '>Contact</Link>
      </div>
    </div>
  );
};

export default Header;
