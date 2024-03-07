import React from 'react';
import Appbar from "../components/Appbar";
import GetStarted from "../components/GetStarted";
import TrendingCoins24h from "../components/TrendingCoin";
import Currencies from "../components/currenci";
import TeamPage from "../components/Team";
import AboutBitcoin from "../components/Aboutbitcoin";
import Dashboard from "../components/Dashboard";
import Tokeniomics from "../components/Tokeniomics";
import Sentiments from "../components/Sentiments ";
import PerformanceComponent from "../components/Performance";
import LastComponent from "../components/Lastcomponent";
import BitcoinGraph from "../components/BitcoinGraph"

const App = () => {
  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-3 p-4">
        <div className="col-span-2">
          <div className="flex full-width flex-col items-stretch">
            <Currencies />
            <BitcoinGraph />
            <Dashboard />
            <PerformanceComponent/>
            <Sentiments />
            <AboutBitcoin />
            <Tokeniomics />
            <TeamPage />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-stretch">
            <GetStarted />
            <TrendingCoins24h />
          </div>
        </div>
      </div>
      <LastComponent/>
    </div>
  );
};

export default App;
