import React from 'react';

export default function EllipsSVG(props) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 13 14" fill="none">
        <circle cx="6.5" cy="7" r="6" stroke="#CBD5E0" style={{fill:props.color,width:props.width,height:props.height}}/>
      </svg>
    </div>
  )
}
