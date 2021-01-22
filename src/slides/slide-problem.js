import React from 'react';
import './slides.css';
import background from '../assets/background-problem.jpg'
import uti from '../assets/uti.jpg';
import fever from '../assets/fever.jpg'
import soreThroat from '../assets/sore-throat.jpg'

function ProblemPath() {
  return (
    <div className="problem-path">
      <p>Sore Throat</p>
      <p>Antibiotics</p>
      <p>Antibiotic Resistance</p>
      <p>Meningitis</p>
      <p>Hospitalisation</p>
      <p>Death</p>
    </div>
  )
}

function ProblemSelector(props) {
  return (
    <div class="problem-selector">
      <img src={props.image}/>
    </div>
  )
}

function Problem() {
  return (
    <div className="container theme-image problem">
      <img src={background} className="background"/>
      <div className="slide">
        <h1>Problem</h1>
        <p className="body-dark"> 
          Select a path to explore the problem
        </p>
        <div className="problem-paths">
          <ProblemSelector image={uti}/>
          <ProblemSelector image={soreThroat}/>
          <ProblemSelector image={fever}/>          
        </div>
      </div>
    </div>
  )
}
export default Problem;