import React from 'react';
import './Attractions.css';

const Attractions = (props) => {
  return (
    <div className="subcontainer">
      <div className="subcontainer1">
        <img className="image" src={props.attraction.image1} />
      </div>
      <div className="subcontainer2">
        <strong className="name">{props.attraction.name}</strong>
        <h4>${props.attraction.price}</h4>
        <button onClick={() => props.setCurrentAttraction(props.attraction)} className="btn">Details</button>
      </div>
    </div>
  )
}

export default Attractions
