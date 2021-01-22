import React from 'react';
import './slides.css';
import stefano from '../assets/stefano.jpg';

function Advisors() {
  return (
    <div className="container theme-light">
      <div className="slide advisors">
        <h1>Advisors</h1>
        <div className="members">
          <div>
            <img src={stefano}/>
            <h2>Dr Stefano Angioletti-Uberti</h2>
            <h3>Science Advisor</h3>
            <p>Senior Lecturer at Imperial College London</p>
          </div>
          <div>
            <img src={stefano}/>
            <h2>Dr Stefano Angioletti-Uberti</h2>
            <h3>Science Advisor</h3>
            <p>Senior Lecturer at Imperial College London</p>
          </div>
          <div>
            <img src={stefano}/>  
            <h2>Dr Stefano Angioletti-Uberti</h2>
            <h3>Science Advisor</h3>
            <p>Senior Lecturer at Imperial College London</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Advisors;
