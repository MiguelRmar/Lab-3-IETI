import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './Login'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Login />
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign up
        </a>
      </header>
    </div>
  );
}

export default App;
