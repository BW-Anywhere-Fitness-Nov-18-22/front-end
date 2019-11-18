import React from 'react';
import logo from '../src/logo.png';
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

        <SignUp />

      </header>
    </div>
  );
}

export default App;

 