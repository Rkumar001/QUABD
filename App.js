// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ShowSummaryScreen from './screens/ShowSummaryScreen';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/show/:id" element={<ShowSummaryScreen/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
