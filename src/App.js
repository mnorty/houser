import React from 'react';
import './App.css';
import Wizard from './Components/Wizard/Wizard'
import Dashboard from './Components/Dashboard/Dashboard';
import House from './Components/House/House';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Wizard/>
      <Dashboard/>
    </div>
  );
}

export default App;
