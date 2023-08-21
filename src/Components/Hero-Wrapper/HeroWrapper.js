import React from 'react';
import IMG from './Hero-Wrapper__image.png';
import "./HeroWrapper.css";
export default function HeroWrapper() {
  return (
      <div className="Hero-Wrapper">
        <div className="Hero-Wrapper_text" >
          <div className="Header-Text">
            <div className="H1-primary-text">
              <h1>Great <span className='H1-primary-text-product'>Product</span>  is<br/> <span className='H1-primary-text-built'>built by great</span> <span className='H1-primary-text-teams'>teams</span> </h1>
              <p>We help build and manage a team of world-class developers<br/> to bring your vision to life</p>
            </div>
          </div>
          <div className="Btn-Primary">
            <button>Let's get started!</button>
          </div>
        </div>
        <div className="Hero-Wrapper_image">
            <img src={IMG} alt="Error" />
        </div>
      </div>
  )
}
