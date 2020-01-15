import React from 'react';
import logo from './logo-k8s.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>HOME</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Kubernetes is great.
        </p>
        <a
          className="App-link"
          href="/about"
        >
          Learn more about Kubernetes
        </a>
      </header>
    </div>
  );
}

export default Home;
