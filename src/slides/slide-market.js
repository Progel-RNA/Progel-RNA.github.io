import React from 'react';
import './slides.css';

function MarketStat(props) {
  return (
    <div>
      <h1>{props.main}</h1>
      <h2>{props.text}</h2>
    </div>
  )
}

function Market() {
  return (
    <div className="container theme-dark">
      <div className="slide market">
        <div className="market-stats">
            <MarketStat main="25%" text="Increase in antibiotic resistant bacteria by 2030"/>
            <MarketStat main="150+" text="Currently Approved POC tests"/>
            <MarketStat main="2,800,000" text="Antibiotic resistant infections in USA each year"/>
        </div>
      </div>
    </div>
  )
}
export default Market;
