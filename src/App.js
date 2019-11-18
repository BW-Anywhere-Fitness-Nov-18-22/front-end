import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Header';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <SignUp />
    </div>
  );
}

export default App;
