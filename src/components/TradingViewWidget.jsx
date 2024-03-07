import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "Crypto:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;

    container.current.appendChild(script);

    // Cleanup function
    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div >

      <div className="w-[100%] h-[280px]  lg:h-[365px]" ref={container} ></div>
      <div className="tradingview-widget-copyright mt-4">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="text-blue-500">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
