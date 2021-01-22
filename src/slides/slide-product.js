import React from 'react';
import './slides.css';
import lateralFlowTest from '../assets/lateral-flow-test.png'

function ProductFeature (props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

function Product() {
  return (
    <div className="container theme-dark">
      <div className="slide product">
        <h1>Product</h1>
        <div>
          <div>
            <ProductFeature title={"Point-of-care test"} text={"For use in a variety of healthcare settings"}/>
            <ProductFeature title={"Advanced Computational Tools"} text={"For the rapid design of infection specific tests"}/>
            <ProductFeature title={"Preliminary Results"} text={"Computational results validate the technology"}/>
          </div>
          <img src={lateralFlowTest}/>
        </div>
      </div>
    </div>
  )
}
export default Product;
