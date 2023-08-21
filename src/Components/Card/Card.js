import React from 'react'
import "./Card.css";

export default function Card(props) {
  return (
    <div className='Card'>
      <div className="mainCard">
        <div className="IMG">
        <img src={props.img} alt="Error" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.Content}</p>
      </div>
    </div>
  )
}
