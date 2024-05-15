import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };        

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-white p-4 flex justify-between items-center mx-4 mt-4">
      <div className="text-2xl font-bold">
             Home
      </div>
      <div className="relative" ref={dropdownRef}>
        <button 
          className="text-white focus:outline-none" 
          onClick={toggleDropdown}
        >
          <FaBars className="text-2xl" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg z-10">
            <a href="#" className="block px-4 py-2 hover:bg-Black rounded-lg m-[2%]" onClick={closeDropdown}>List Item 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-Black rounded-lg m-[2%]" onClick={closeDropdown}>List Item 2</a>
            <a href="#" className="block px-4 py-2 hover:bg-Black rounded-lg m-[2%]" onClick={closeDropdown}>List Item 3</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
