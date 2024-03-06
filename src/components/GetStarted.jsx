import React from 'react';
import getstarted from '../images/getstarted.jpg'
const GetStarted = () => {
  return (
    <div className="bg-blue-600 h-full p-4 rounded-md mt-14 m-5 flex flex-col justify-center items-center">
      <h4 className="text-white text-2xl font-bold mb-2 text-center">Get Started with KoinX for FREE</h4>
      <p className="text-white text-1xs font-semibold mb-4 text-center">
        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
      </p>
      <img src={getstarted} alt="Small Image" className="w-44 h-44 object-cover rounded-sm mb-4" />
      <button className="bg-white text-black-500 px-3 py-1 rounded-md font-semibold hover:bg-blue-600 hover:text-white">
        Get Started for FREE →
      </button>
    </div>
  );
};

export default GetStarted;
