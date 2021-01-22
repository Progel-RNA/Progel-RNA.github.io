import React from 'react';
import './slides.css';

function Slide() {
  return (
    <div>
      <div className="slide theme-dark">
        <h1>Problem</h1>
      </div>
      <div className="slide theme-light">
        <h1>Solution</h1>
      </div>
      <div className="slide theme-dark">
        <h1>Product</h1>
      </div>
      <div className="slide theme-light">
        <h1>Business Model</h1>
      </div>
      <div className="slide theme-dark">
        <h1>Market</h1>
      </div>
      <div className="slide theme-light">
        <h1>Competitors</h1>
      </div>
      <div className="slide theme-dark">
        <h1>Timeline</h1>
      </div>
      <div className="slide theme-light">
        <h1>Contact Us</h1>
      </div>
    </div>
  )
}
export default Slide;

/*
<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
*/