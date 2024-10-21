import React from 'react';
import './App.css';
import useStyles from './styles/styles';
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';

function App() {
  const classes = useStyles();
  return (

    <div className="App">
      <Navbar />
      <div className={classes.marketplaceContainer}>
        <Marketplace />
      </div>
    </div>
  );
}

export default App;
