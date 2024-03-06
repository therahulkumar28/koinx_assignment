import Appbar from "./components/Appbar";
import GetStarted from "./components/GetStarted";
import TradingViewWidget from "./components/TradingViewWidget";
import TrendingCoins24h from "./components/TrendingCoin";
import Currencies from "./components/currenci";
import TeamPage from "./components/Team";
import AboutBitcoin from "./components/Aboutbitcoin";

function App() {
  return (
    <div >
      <Appbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
        <div className="col-span-2">
         
          <div className="flex full-width flex-col items-stretch">
         
            <Currencies />
            <TradingViewWidget/>
            <TeamPage/>
            <AboutBitcoin/>
          </div>
        </div>
        <div className="col-span-1">
     
          <div className="flex flex-col items-stretch">
            <GetStarted />
            <TrendingCoins24h />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
