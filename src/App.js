import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './components/sample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Sample />
      </header>
    </div>
  );
}

export default App;
