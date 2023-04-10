import React from "react";
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Footer = () => {
  return (
    <div>
      <footer className="py-4 border-t border-gray-300">
        <div className="flex justify-between items-center mx-4">
          <div className="flex items-center">
            <img className="h-8 w-8" src={reactLogo} alt="React logo" />
            <span className="ml-2 text-gray-700 font-semibold">My Blogs</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-4">
              jogindersingh@xyz.com
            </span>
            <img className="h-8 w-8" src={viteLogo} alt="Vite logo" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
