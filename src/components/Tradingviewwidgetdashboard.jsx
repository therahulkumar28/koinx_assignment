import { useState, useEffect } from "react";
import axios from "axios";
import TradingViewWidget from "./TradingViewWidget";
import img from "../images/bitcoin.jpg";

function TradingViewWidgetdashboard() {
  const [cryptoData, setCryptoData] = useState(null);
  const [selectedInterval, setSelectedInterval] = useState('7D');

  const handleIntervalChange = (interval) => {
    if (interval !== selectedInterval) {
      setSelectedInterval(interval);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
        );
        setCryptoData(response.data.bitcoin);
      } catch (error) {}
    };

    fetchData();

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col justify-center bg-white h-max shadow-md rounded-lg my-5 p-6 max-w-screen-lg ">
      <div className="flex items-center">
        <div>
          <img src={img} className="w-9" alt="Bitcoin" />
        </div>
        <div className="text-2xl font-semibold text-[#0B1426] pl-2">
          Bitcoin
        </div>
        <div className="text-sm text-[#5D667B] pl-2">BTC</div>
        <div className="bg-[#808A9D] px-3 py-2 text-white rounded-lg ml-7">
          Rank #1
        </div>
      </div>
      <div className="mt-8 flex">
        <div>
          <div className="text-3xl font-semibold text-[#0B1426]">
            {(cryptoData && `$${cryptoData.usd}`) || "$66759"}
          </div>
          <div className="text-lg font-medium text-[#0B1426]">
            {(cryptoData && `₹ ${cryptoData.inr}`) || "₹ 5535287"}
          </div>
        </div>
        <div
          className={`flex items-center justify-center rounded-lg p-2 h-10 ml-10 ${cryptoData && cryptoData.inr_24h_change < 0
              ? "bg-red-300/20"
              : "bg-green-300/20"
            }`}
        >
          <svg
            viewBox="0 0 100 100"
            className={`w-4 fill-current ${cryptoData && cryptoData.inr_24h_change < 0
                ? "text-red-600 rotate-180"
                : "text-green-600"
              }`}
          >
            <polygon points="0,100 50,0 100,100" />
          </svg>
          <span
            className={`ml-2 text-sm font-bold ${cryptoData && cryptoData.inr_24h_change < 0
                ? "text-red-600"
                : "text-green-600"
              }`}
          >
            {(cryptoData &&
              `${Math.abs(cryptoData.inr_24h_change).toFixed(2)}%`) ||
              "2.18%"}
          </span>
        </div>
        <div className="text-sm text-[#768396] ml-2 mt-2">(24H)</div>
      </div>
      <hr className="my-4" />
      <div className="lg:flex mb-4 justify-between">
        <div className="ls:text-lg text-sm font-semibold text-[#0B1426]">
          Bitcoin Price Chart (USD)
        </div>
        <div className="flex lg:space-x-5 space-x-3 mr-4 text-sm text-[#5D667B] font-medium text-center items-center">
          <div onClick={() => handleIntervalChange("1H")} className={`${selectedInterval === "1H" ? "text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1" : ""}`}>1H</div>
          <div onClick={() => handleIntervalChange("24H")} className={`${selectedInterval === "24H" ? "text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1" : ""}`}>24H</div>
          <div onClick={() => handleIntervalChange("7D")} className={`${selectedInterval === "7D" ? "text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1" :""}`}>
            7D
          </div>
          <div onClick={() => handleIntervalChange("1M")} className={`${selectedInterval === "1M" ?  "text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1" : ""}`}>1M</div>
          {/* Add more intervals as needed */}
          <div onClick={() => handleIntervalChange("1Y")} className={`${selectedInterval === "1Y" ?  "text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1" : ""}`}>1Y</div>
          <div onClick={() => handleIntervalChange("All")} className={`${selectedInterval === "All" ?  "text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1" : ""}`}>All</div>
        </div>
      </div>
      <div className="lg:h-[420px] h-[300px]">
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default TradingViewWidgetdashboard;
