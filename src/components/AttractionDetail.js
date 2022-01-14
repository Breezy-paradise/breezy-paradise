import React, { useState, useEffect } from 'react'
import './Attractions.css';

const AttractionDetail = ({ attraction, addAttractionToItinerary }) => {
  //TODO: add a dayNumber selector 
  const [dayNumber, setDayNumber] = useState(1);

  return (
    <div>
      {/* Only render an attraction if one is selected */}
      {attraction ?
        <div className="subcontainer-details">
          <div className="subcontainer-details1">
            <img className="image" src={attraction.image1} />
            <img className="image" src={attraction.image2} />
          </div>
          <div className="subcontainer-details2">
            <h4 className="price">Price: ${attraction.price}</h4>
            <br />
            <div>Description:
              <br />
              <br />
              <p className="parrafo">{attraction.description}</p>
            </div>
            <br />
            <h4 className="duration">Duration hrs: {attraction.duration_hours}</h4>
            <button onClick={() => addAttractionToItinerary(dayNumber, attraction.id)} className="btn">Select Attraction</button>
          </div>
        </div>
        : <h3> Select an Attraction </h3>}
    </div>
  )
}

export default AttractionDetail