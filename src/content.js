import React from 'react';
import './content.css';
import line from './assets/line.svg';
import diagram from './assets/diagram.svg';

function Content() {

  let downloadLink = "https://drive.google.com/file/d/1Ov-mbUbUp9GSgy4zCsmrpX8xYDFczvGj/view?usp=sharing";
  return (
    <div className="container title">
      <div className="light scrollable">
        <div className="slide">
          <h1 className="main-title">Progel</h1>
          <img src={line} className="title-line" alt="line"/>
          <h2>Bringing the power of mRNA technologies to anyone, anywhere</h2>
          <a target="_blank" rel="noreferrer"  className="contact-button" href={downloadLink}>
            <h1>Download Pitch Deck</h1>
          </a>
        </div>
        <div className="slide">
          <h1 className="contact-button theme-light">About Us</h1>
          <div className="text-box theme-light">
            <p>
              The mRNA vaccines developed during the COVID-19 pandemic are just the tip of the 
              iceberg for mRNA therapeutics. One of the biggest problems with RNA technologies 
              is storage. With ProGEL technology, RNA can be stored at high temperatures, 
              facilitating the distribution of RNA technologies to anywhere in the world.
            </p>  
          </div>
          <a target="_blank" rel="noreferrer"  className="contact-button" href={downloadLink}>
            <h1>Download Pitch Deck</h1>
          </a>
        </div>
        <div className="slide">
          <h1 className="contact-button theme-light">Our Technology</h1>
          <div className="text-box theme-light">
            <p>
            <code>Proprietary polymer formulation</code> which wraps and protects mRNA against degradation at <code>room temperature</code>
            </p>
            <img src={diagram} className="diagram" alt="diagram"/>
          </div>
          <div className="button-row-container">
            <div className="button-row">
              <a target="_blank" rel="noreferrer" className="contact-button" href="mailto:invest@debeshmandal.co.uk">
                <h1>Contact Us</h1>
              </a>
              <a target="_blank" rel="noreferrer" className="contact-button" href={downloadLink}>
                <h1>Download Pitch Deck</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Content;