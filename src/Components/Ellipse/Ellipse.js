import React from 'react';
import "./Ellipse.css";
export default function Ellipse(props) {
  return (
    <div className='Ellipse' style={{top:props.top,left:props.left,height:props.height,width:props.width}}>
    </div>
  )
}
