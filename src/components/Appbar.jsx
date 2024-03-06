import React from 'react';

const Appbar = () => {
    return (
        <div className="bg-white shadow-md p-4 relative">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center relative">
                    <img src="https://lh7-us.googleusercontent.com/TvLUwSeXBErDf9yMpa2BwEOFA8EKepuCaus1b6f-4Qzz3yv4O2YcPRhJu1R1NaTxiF4UH7a6lt8xW4TVlw6W2TIPCZY5_5eKgKRREthnlVtAQ4dEg1rVt5nNzAMSTkjr2rvTiit06ELjWHGGsEH_4Q" alt="Crypto Taxes Logo" className="h-6 w-auto mr-2" />
                    <span className="absolute bottom-5 right-0 text-gray-500 text-xs font-bold">TM</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-black font-semibold">Crypto Taxes</a>
                    <a href="#" className="text-black font-semibold">Free Tools</a>
                    <a href="#" className="text-black font-semibold">Resource Center</a>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shadow-md">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appbar;
