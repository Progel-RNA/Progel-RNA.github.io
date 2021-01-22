import React from 'react';
import './slides.css';
import background from '../assets/background-summary.jpg';

function Summary() {
  return (
    <div className="container theme-image">
      <img src={background} className="background"/>
      <div className="slide summary">
        <h1>Executive Summary</h1>
        <p className="black"> 
          Over 100,000 people die every year from antimicrobial resistant 
          bacteria. Advanced diagnostics are needed to identify these 
          bacteria and get patients the treatment they need to save their 
          lives. Our product is a rapid point-of-care test to identify 
          any specific bacteria using advanced DNA probing. This will 
          save millions of lives and billions from the economy.
        </p>
      </div>
    </div>
  )
}
export default Summary;
