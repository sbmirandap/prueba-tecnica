import React from 'react';
import { Button } from '@mui/material';
import logo from './assets/bancame_logo_white.svg';
import './App.css';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const goToBancaMe = () => {
    window.open('https://banca.me', '_blank');
  };
  const goToMaterialUI = () => {
    window.open('https://mui.com', '_blank');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
        <div className={classes.buttonsContainer}>
          <Button
            onClick={goToBancaMe}
            className={classes.button}
            variant="contained"
          >
            Ir a Banca.me
          </Button>

          <Button
            onClick={goToMaterialUI}
            className={classes.button}
            variant="contained"
          >
            Ir a Material UI
          </Button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
