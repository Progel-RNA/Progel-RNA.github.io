import React from 'react';
import './slides.css';
import timeline from '../assets/timeline.svg'

function Timeline() {
  return (
    <div className="container theme-dark">
      <div className="timeline">
        <h1>Timeline</h1>
        <img src={timeline}/>
      </div>
    </div>
  )
}
export default Timeline;