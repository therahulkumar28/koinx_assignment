import React from 'react';

const TrendingCoins24h = () => {
  const trendingCoinsData = [
    { name: 'Ethereum', symbol: 'ETH', change: '+8.21%' },
    { name: 'Bitcoin', symbol: 'BTC', change: '+5.26%' },
    { name: 'Polygon', symbol: 'MATIC', change: '+4.32%' },
  ];

  return (
    <div className="mt-5 m-4 p-4 bg-white rounded shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Trending Coins (24h)</h2>
      {trendingCoinsData.map((coin, index) => (
        <div key={index} className="flex items-center mb-2">
          <span className="text-xl font-semibold">{index + 1}.</span>
          <div className="ml-3 flex justify-between w-full">
            <span className="text-lg font-semibold">{coin.name} ({coin.symbol})</span>
            <span className="text-xs text-gray-500">
              <span className={`bg-green-200 text-green-700 p-1 rounded`}>
                {coin.change}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins24h;
