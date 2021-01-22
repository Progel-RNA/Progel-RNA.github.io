import React from 'react';
import './slides.css';
import fever from '../assets/fever.jpg';


function Contact() {
  return (
    <div className="container contact">
      <div className="slide">
        <a target="_top" className="contact-button" href="mailto:invest@debeshmandal.co.uk">
          <h1>Contact Us</h1>
        </a>
        <br/>
        <a target="_top" className="contact-button" href={fever}>
          <h1>Download Pitch Deck</h1>
        </a>
      </div>
    </div>
  )
}
export default Contact;