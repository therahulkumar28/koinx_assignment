import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Appbar from '../components/Appbar';

const CryptoDetails = () => {
  const { cryptoId } = useParams();
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      const coingeckoAPIURL = `https://api.coingecko.com/api/v3/coins/${cryptoId}`;

      try {
        const response = await axios.get(coingeckoAPIURL);
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, [cryptoId]);

  if (!cryptoData) {
    return <p className="text-center mt-4 text-gray-600">Loading crypto data...</p>;
  }

  return (
    <div>
      <Appbar />
      <div className="bg-white p-8 rounded-md shadow-md">
        <CryptoCard cryptoData={cryptoData} />
      </div>
    </div>
  );
};

function CryptoCard({ cryptoData }) {
  const { name, description, links, platforms, categories, image } = cryptoData;

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center mb-4">
        {image.small && (
          <img src={image.small} alt={`${name} logo`} className="w-12 h-12 mb-4 md:mb-0 md:mr-4 rounded-full" />
        )}
        <h1 className="text-4xl font-bold">{name}</h1>
      </div>
      <p className="text-gray-700 mb-8">{description.en.slice(0, 900)}</p>

      <div className="flex flex-col justify-between  overflow-hidden">
        <div className="mb-4 md:pr-4">
          <h2 className="text-2xl font-semibold mb-4">Links</h2>
          <p className="font-semibold">Homepage:</p>
          <ul className="list-disc pl-4">
            {links.homepage.map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Blockchain Site:</h2>
          <ul className="list-disc pl-4">
            {links.blockchain_site.map(
              (link, index) =>
                link && (
                  <li key={index}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                )
            )}
          </ul>
        </div>

      </div>

      <div className="flex flex-col   mt-8">
        <div className="md:w-1/2 mb-4 md:pr-4">
          <h2 className="text-2xl font-semibold mb-4">Platforms</h2>
          <ul className="list-disc pl-4">
            <li>
              Binance Smart Chain: <span className="text-green-500">{platforms['binance-smart-chain']}</span>
            </li>
            <li>
              Ethereum: <span className="text-blue-500">{platforms.ethereum}</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="flex flex-col flex-wrap">
            {categories.map((category, index) => (
              <div key={index} className="mr-4 mb-2">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoDetails;
