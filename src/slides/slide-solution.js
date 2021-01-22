import React from 'react';
import './slides.css';

function SolutionListGood() {
  return (
    <div className="solution-list">
      <h3>Distinguish:</h3>
      <ul>
        <li>Infection Type</li>
        <li>Presence of antibiotic resistant genes</li>
        <li>The strain of infection</li>
      </ul>
    </div>
  )
}

function SolutionListBad() {
  return (
    <div className="solution-list">
      <h3>Not be:</h3>
      <ul>
        <li>Expensive</li>
        <li>Slow</li>
      </ul>
    </div>
  )
}

function Solution() {
  return (
    <div className="container theme-light">
      <div className="slide solution">
        <h1>Solution</h1>
        <h2>A quick diagnosis of infections which should</h2>
        <div className="solution-list-container">
          <SolutionListGood/>
          <SolutionListBad/>
        </div>
      </div>
    </div>
  )
}

export default Solution;
