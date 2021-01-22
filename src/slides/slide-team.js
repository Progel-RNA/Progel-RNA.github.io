import React from 'react';
import './slides.css';
import debesh from '../assets/debesh.jpg';
import shanil from '../assets/shanil.png';
import chris from '../assets/chris.jpg';
import yang from '../assets/yang.png';

function Team() {
  return (
    <div className="container theme-dark light">
      <div className="slide team">
        <h1>Team</h1>
        <div className="members">
            <div>
              <img src={debesh}/>
              <h2>Debesh Mandal</h2>
              <h3>CEO</h3>
              <p>PhD Researcher</p>
            </div>
            <div>
              <img src={shanil}/>
              <h2>Shanil Panara</h2>
              <h3>Chief Engineer</h3>
              <p>ex-Product Engineer at Pluvo</p>
            </div>
            <div>
              <img src={chris}/>
              <h2>Christopher Lau</h2>
              <h3>Business Lead</h3>
              <p>ex-Electrical engineer at Ampd Energy</p>
            </div>
            <div>
              <img src={yang}/>
              <h2>Tianyang Zhang</h2>
              <h3>COO</h3>
              <p>Materials Engineer at Imperial College London</p>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Team;
