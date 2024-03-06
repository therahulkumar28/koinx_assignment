import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex overflow-x-auto">
    
      <div className="w-1/3 p-4 hover:underline hover:text-blue-900 cursor-pointer transition-all duration-300">
        <h2>Overview</h2>
      </div>

      {/* Fundamentals Section */}
      <div className="w-1/3 p-4 hover:underline cursor-pointer transition-all duration-300">
        <h2>Fundamentals</h2>
      </div>

      {/* News Section */}
      <div className="w-1/3 p-4 hover:underline cursor-pointer transition-all duration-300">
        <h2>News</h2>
      </div>

      {/* Insights Section */}
      <div className="w-1/3 p-4 hover:underline cursor-pointer transition-all duration-300">
        <h2>Insights</h2>
      </div>

      {/* Sentiments Section */}
      <div className="w-1/3 p-4 hover:underline cursor-pointer transition-all duration-300">
        <h2>Sentiments</h2>
      </div>

      {/* Team Section */}
      <div className="w-1/3 p-4 hover:underline cursor-pointer transition-all duration-300">
        <h2>Team</h2>
      </div>

      {/* Technicals Section */}
      <div className="w-1/3 p-4 hover:underline cursor-pointer transition-all duration-300">
        <h2>Technicals</h2>
      </div>
    </div>
  );
};

export default Dashboard;
