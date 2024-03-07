import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-full m-2 flex-row justify-between border-b-2 border-gray-300 overflow-x-auto relative">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`p-2 cursor-pointer transition-all duration-300 relative z-10 font-semibold ${
            activeTab === index ? 'text-blue-500' : 'text-[#3E424A]'
          }`}
          onClick={() => setActiveTab(index)}
        >
          <h2>{tab}</h2>
          {activeTab === index && <div className="underline absolute inset-x-0 bottom-0 border-b-2 border-blue-500"></div>}
        </div>
      ))}
    </div>
  );
};

const tabs = ['Overview', 'Fundamentals', 'News Insights', 'Sentiments', 'Team', 'Technicals', 'Tokenomics'];

export default Dashboard;
