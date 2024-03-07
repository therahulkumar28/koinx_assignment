import React, { useState, useEffect } from 'react';
import koinx from '../images/koinx.png'
const Appbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); 
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMobileNav = () => (
    <div className="flex  items-center space-x-4 ">
      
      <button
        type="button"
        className="text-black font-semibold focus:outline-none"
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      
      {isMenuOpen && (
        <div className="flex justify-between absolute top-full right-0 bg-white p-4  shadow-md w-full">
          <a href="#" className="block m-2 font-semibold">
            Crypto Taxes
          </a>
          <a href="#" className="block m-2 font-semibold">
            Free Tools
          </a>
          <a href="#" className="block m-2  font-semibold">
            Resource Center
          </a>
          <button
            type="button"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shadow-md"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );

  const renderDesktopNav = () => (
    <div className="flex justify-between items-center space-x-4">
      <a href="#" className="text-black font-semibold">
        Crypto Taxes
      </a>
      <a href="#" className="text-black font-semibold">
        Free Tools
      </a>
      <a href="#" className="text-black font-semibold">
        Resource Center
      </a>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shadow-md"
      >
        Get Started
      </button>
    </div>
  );

  return (
    <div className="flex bg-white  shadow-md p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center relative">
          <img
            src={koinx}
            alt="Crypto Taxes Logo"
            className="h-6 w-auto mr-2"
          />
          <span className="absolute bottom-3 left-24z text-gray-500 text-xs font-bold">
            TM
          </span>
        </div>

        {isMobile ? renderMobileNav() : renderDesktopNav()}
      </div>
    </div>
  );
};

export default Appbar;
