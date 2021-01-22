import React from 'react';
import './slides.css';
import consumer from '../assets/consumers.jpg'
import doctor from '../assets/doctor.jpg'
import pharmacist from '../assets/pharmacist.jpeg'
import hospital from '../assets/hospital.jpg'

function ModelCustomer(props) {
  return (
    <div>
      <img src={props.image} className="customer"/>
      <h3>{props.name}</h3>
    </div>
  )
}

function Model() {
  return (
    <div className="container theme-light">
      <div className="slide model">
        <h1>Revenue Model</h1>
        <div class="members">
          <ModelCustomer name='Consumer' image={consumer}/>
          <ModelCustomer name='GP' image={doctor}/>
          <ModelCustomer name='Pharmacy' image={pharmacist}/>
          <ModelCustomer name='Hospital' image={hospital}/>
        </div>
      </div>
    </div>
  )
}
export default Model;
