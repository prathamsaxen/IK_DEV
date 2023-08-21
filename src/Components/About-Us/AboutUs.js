import React from 'react';
import "./AboutUS.css";
import Img from "./images/Frame22.png";
import img from './images/Rectangle 9.png'
import arrow from './images/Group.svg';
export default function AboutUs() {
  return (
    <div className='About-Us'>
      <div className="AboutUs_Details">
        <div className="About-us-details">
          <div className="Deco-line"></div>
          <h2>Leading companies trust us <span className='span-color'> to develop software</span></h2>
          <p className='p-text'>We <span className='span-color1'>add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</p>
          <div className="LinkClick">
            <p>See more Informations</p>
            <img src={arrow} alt="Error" />
          </div>
        </div>
        <div className="Rectangle-9">
          <img src={img} alt="Error" />
        </div>
      </div>
      <div className="Frame11">
      <div className="Deco-line"></div>
      <h2>Meet the People <br/><span className='Frame11-Heading'>We are Working With</span></h2>
      </div>
      <div className="Frame22">
        <img src={Img} alt="Error" />
      </div>
    </div>
  )
}
