import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
// import House from './Components/House/House';
import Header from './Components/Header/Header';
import routes from './routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header className='App-header'/>
        <div className='dashboard'>
        {routes}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;