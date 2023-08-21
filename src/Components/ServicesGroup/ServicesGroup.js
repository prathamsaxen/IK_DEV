import React from 'react';
import "./ServicesGroup.css";
import Card from '../Card/Card';
import ServiceCard from './Data';
import EllipsSVG from '../EllipseSVG/EllipsSVG';
import Numb from "./images/numb.png"
export default function ServicesGroup() {
  return (
    <div className='ServicesGroup'>
      <h2>Services we offer</h2>
      <div className="Card-Corousel">
        {
          ServiceCard.map((item,index)=>{
            return <Card img={item.logo} heading={item.heading} Content={item.content} key={index}/>
          })
        }
      </div>
      <div className="Corousel-Nodes">
      <EllipsSVG width={"13px"} height={"13px"}/>
      <EllipsSVG width={"13px"} height={"13px"}/>
      <EllipsSVG color={"#57007B"} width={"18px"} height={"18px"}/>
      <EllipsSVG width={"13px"} height={"13px"}/>
      <EllipsSVG width={"13px"} height={"13px"}/>
      </div>
      <div className="Corousel-slider-numb">
        <img src={Numb} alt="Error" />
      </div>
    </div>
  )
}
