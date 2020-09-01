import React from 'react';
import RaceSelection from './components/raceSelection/raceSelection.js';
import AppNav from './components/navbar/appnav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <AppNav />
      <RaceSelection />
    </div>
  );
}

export default App;
