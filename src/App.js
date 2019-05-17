import React from 'react';
import './App.css';
import SpclockComponent from './components/spclock/SpclockComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Countdown Timer
      </header>
      <div className="App-content">
        <SpclockComponent></SpclockComponent>
      </div>
    </div>
  );
}

export default App;
