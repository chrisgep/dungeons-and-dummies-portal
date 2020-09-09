import React from 'react';
import RaceSelection from './pages/raceSelectionPage'
import SelectedRace from './pages/selectedRacePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={RaceSelection} />
        <Route exact path="/selectedRace" component={SelectedRace} />
      </Router>
    </div>
  );
}

export default App;
