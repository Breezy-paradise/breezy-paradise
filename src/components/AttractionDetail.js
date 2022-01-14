import React from 'react'
import './Attractions.css'

const AttractionDetail = (props) => {
  return (
    <div className='subcontainer-details'>
      <div className='subcontainer-details1'>
        <img className='image' src={props.attraction.image1} />
        <img className='image' src={props.attraction.image2} />
      </div>
      <div className='subcontainer-details2'>
        <h4 className='price'>Price: ${props.attraction.price}</h4>
        <br />
        <div>
          Description:
          <br />
          <br />
          <p className='parrafo'>{props.attraction.description}</p>
        </div>
        <br />
        <h4 className='duration'>
          Duration hrs: {props.attraction.duration_hours}
        </h4>
        <button className='btn'>Select Attraction</button>
      </div>
    </div>
  )
}

export default AttractionDetail
