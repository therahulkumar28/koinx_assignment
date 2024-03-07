import { useState, useEffect, useRef } from "react";
import axios from "axios";

function LastComponent() {
  const [cryptoData, setCryptoData] = useState([]);
  const trendingContainerRef = useRef(null);
  const mayLikeContainerRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setCryptoData(response.data.coins);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const scroll = (direction, containerRef) => {
    const container = containerRef.current;
    const scrollAmount = container.clientWidth / 2;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className=" mt-1 sm:mt-3 bg-white h-max  p-14 relative">
      <div>
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>

        <div className="mt-4 flex space-x-4 overflow-hidden relative">
          <div
            ref={mayLikeContainerRef}
            className="flex items-center"
            style={{ flexWrap: "nowrap", overflowX: "hidden" }}
          >
            {cryptoData.slice(5, 10).map((crypto, index) => (
              <CryptoCard key={index} cryptoData={crypto.item} />
            ))}
          </div>
          <div className="flex  justify-between absolute inset-y-0 -left-8 right-0">
            <button
              onClick={() => scroll("left", mayLikeContainerRef)}
              className="py-2 px-4 rounded-md"
            >
              {"<"}
            </button>
            <button
              onClick={() => scroll("right", mayLikeContainerRef)}
              className="py-2 px-4 font-bold rounded-md"
            >
              {">"}
            </button>
          </div>
        </div>

        <div className="text-[#202020] text-2xl font-semibold mt-6">
          Trending Coins
        </div>
        <div className="mt-4 flex space-x-4 overflow-hidden relative">
          <div
            ref={trendingContainerRef}
            className="flex items-center"
            style={{ flexWrap: "nowrap", overflowX: "hidden" }}
          >
            {cryptoData.slice(2, 7).map((crypto, index) => (
              <CryptoCard key={index} cryptoData={crypto.item} />
            ))}
          </div>
          <div className="flex justify-between absolute inset-y-0 -left-8 right-0">
            <button
              onClick={() => scroll("left", trendingContainerRef)}
              className="font-bold py-2 px-4 rounded-md"
            >
              {"<"}
            </button>
            <button
              onClick={() => scroll("right", trendingContainerRef)}
              className="font-bold py-2 px-4 rounded-md"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CryptoCard({ cryptoData }) {
    console.log("Sparkline URL:", cryptoData.sparkline);
  
    return (
      <div className="w-[300px] h-[200px] rounded-2xl p-5 border-2 m-2">
        <div className="flex items-center space-x-2">
          <img
            src={cryptoData.large}
            alt={cryptoData.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-[16px] font-normal">{cryptoData.name}</span>
          <span
            className={`text-${
              cryptoData.data.price_change_percentage_24h.usd > 0
                ? "green"
                : "red"
            }-500 bg-${
              cryptoData.data.price_change_percentage_24h.usd > 0
                ? "#0AB27D"
                : "#FF0000"
            }/10 text-xs font-normal`}
          >
            {cryptoData.data.price_change_percentage_24h.usd.toFixed(2)}%
          </span>
        </div>
        <div className="text-xl text-[#171717] font-medium mt-2">
          {cryptoData.data.price}
        </div>
  
        <img
          src={
            cryptoData && cryptoData.sparkline
              ? cryptoData.sparkline
              : "https://www.coingecko.com/coins/33566/sparkline.svg"
          }
          alt={cryptoData && cryptoData.name ? cryptoData.name : ""}
          className="w-full "
        />
      </div>
    );
  }

export default LastComponent;
