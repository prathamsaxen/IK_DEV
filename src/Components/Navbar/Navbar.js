import React from 'react';
import IMG from "./Vector.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="logo">
        <img src={IMG} alt="Error"/>
        <p>Ik developers</p>
      </div>
      <nav>
        <ul>
            <li><a href="/">About us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Case Studies</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">How it Works</a></li>
            <li><a href="/">Hire</a></li>
        </ul>
      </nav>
      <div className="button">
        <button>
            Contact us
        </button>
      </div>
    </div>
  )
}
