import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a leading real estate business committed to providing excellent services and ensuring customer satisfaction. Our mission is to help you find your dream home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">Address:</span> 1234 Street Name, City, State, Zip Code
            </li>
            <li className="mb-2">
              <span className="font-semibold">Phone:</span> (123) 456-7890
            </li>
            <li className="mb-2">
              <span className="font-semibold">Email:</span> info@realestate.com
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Real Estate Business. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
