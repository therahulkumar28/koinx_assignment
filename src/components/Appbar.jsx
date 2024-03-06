import React, { useState, useEffect } from 'react';

const Appbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMobileNav = () => (
    <div className="flex items-center space-x-4">
      {/* Hamburger Icon */}
      <button
        type="button"
        className="text-black font-semibold focus:outline-none"
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      {/* Hidden Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 bg-white p-4 shadow-md">
          <a href="#" className="block mb-2 text-black font-semibold">
            Crypto Taxes
          </a>
          <a href="#" className="block mb-2 text-black font-semibold">
            Free Tools
          </a>
          <a href="#" className="block mb-2 text-black font-semibold">
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
    <div className="flex items-center space-x-4">
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
    <div className="bg-white  shadow-md p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center relative">
          <img
            src="https://lh7-us.googleusercontent.com/TvLUwSeXBErDf9yMpa2BwEOFA8EKepuCaus1b6f-4Qzz3yv4O2YcPRhJu1R1NaTxiF4UH7a6lt8xW4TVlw6W2TIPCZY5_5eKgKRREthnlVtAQ4dEg1rVt5nNzAMSTkjr2rvTiit06ELjWHGGsEH_4Q"
            alt="Crypto Taxes Logo"
            className="h-6 w-auto mr-2"
          />
          <span className="absolute bottom-5 right-0 text-gray-500 text-xs font-bold">
            TM
          </span>
        </div>

        {isMobile ? renderMobileNav() : renderDesktopNav()}
      </div>
    </div>
  );
};

export default Appbar;
