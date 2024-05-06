
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Search } from './pages/Search'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
