import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useStyles from './styles/styles';
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';

function App() {
  const classes = useStyles();
  return (

    <Router>
      <div className="App">
        <Navbar />
        <div className={classes.marketplaceContainer}>
          <Routes>
            <Route path="/" element={<Marketplace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
