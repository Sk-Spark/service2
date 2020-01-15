import React from 'react';
import logo from './logo-docker.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>HOME</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Docker is great.
        </p>
        <a
          className="App-link"
          href="/about"
        >
          Learn more about Dockers
        </a>
      </header>
    </div>
  );
}

export default Home;
