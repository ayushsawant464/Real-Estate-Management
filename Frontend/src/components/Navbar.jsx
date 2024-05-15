import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {signOut,onAuthStateChanged, signInWithEmailLink} from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const activeLink= location.pathname


  onAuthStateChanged(firebaseAuth,(currentUser)=>{

      if(!currentUser){
        
         navigate('/')};
    })
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
      <div className='flex items-center justify-center'>

      <div className="text-2xl font-bold">
          Home
      </div>
      <div className="flex ml-6">
      <Link exact to="/buy" className={`mx-4 text-white hover:text-gray-300`}
            >
                        Buy
                    </Link>
                    <Link to="/rent" className={`mx-4   text-white hover:text-gray-300`}
                    >
                        Rent
                    </Link>
                    </div>
                      </div>
                      <div className='flex gap-8  items-center'>
                        <div className='bg-red-600 p-2 rounded-md'>
                          <Link to='/sell'>
                          Sell/Rent Properties
                          </Link>
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
            <div onClick={()=>{signOut(firebaseAuth)}}>

            <a href="#" className="block px-4 py-2 hover:bg-Black rounded-lg m-[2%]" onClick={closeDropdown}>Logout</a>
            </div>
            <a href="#" className="block px-4 py-2 hover:bg-Black rounded-lg m-[2%]" onClick={closeDropdown}>List Item 2</a>
            <a href="#" className="block px-4 py-2 hover:bg-Black rounded-lg m-[2%]" onClick={closeDropdown}>List Item 3</a>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
