import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Allapp from './pages/Allapp';
import CryptoDetails from './pages/CryptoDetails';

const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Allapp/>} />
          <Route path="/:cryptoId" element={<CryptoDetails match={crypto}/>} />
        </Routes>
      </Router>
  );
};

export default App;
