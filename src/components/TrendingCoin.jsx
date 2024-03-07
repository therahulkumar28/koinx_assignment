import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingCoins24h = () => {
  const [trendingCoinsData, setTrendingCoinsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );

        // Assuming the response contains an array of trending coins
        if (response.data && response.data.coins) {
          const top3TrendingCoins = response.data.coins.slice(0, 3);
          setTrendingCoinsData(top3TrendingCoins);
        }
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="mt-5 m-4 p-4 bg-white rounded shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Trending Coins (24h)</h2>
      {trendingCoinsData.map((coin, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
        <div className='flex items-center '>
        <img
            src={coin.item.thumb} 
            alt={coin.item.name}
            className="w-8 h-8 m-2 object-cover rounded-full "
          />
          <div className="p-2 flex flex-start items-left ">
            {coin.item.name} ({coin.item.symbol})
          </div>
        </div>
        
        
            <div className={`flex items-center rounded-sm p-1  ${coin && coin.item.data.price_change_percentage_24h.aed < 0
              ? "bg-red-300/20"
              : "bg-[#EBF9F4]"
            }`}>
              <svg
                viewBox="0 0 100 100"
                className={`w-4 fill-current ${coin.item.data.price_change_percentage_24h.aed < 0
                    ? 'text-red-600 rotate-180'
                    : 'text-[#14B079]'
                  }`}
              >
                <polygon points="0,100 50,0 100,100" />
              </svg>
              <span
                className={`ml-2 text-sm font-bold ${coin.item.data.price_change_percentage_24h.aed < 0
                    ? 'text-red-600'
                    : 'text-[#14B079]'
                  }`}
              >
                {coin.item.data.price_change_percentage_24h.aed.toFixed(2)}%
              </span>
            </div>
          
        </div>
      ))}
    </div>
  );
};

export default TrendingCoins24h;
