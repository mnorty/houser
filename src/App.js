import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Wizard from './Components/Wizard/Wizard'
import Dashboard from './Components/Dashboard/Dashboard';
import House from './Components/House/House';
import Header from './Components/Header/Header';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        <Wizard/>
        <Dashboard/>
      </div>
    </HashRouter>
  );
}

export default App;
