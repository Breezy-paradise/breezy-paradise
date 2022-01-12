import React from 'react'
import './Attractions.css'

const AttractionDetail = (attraction) => {
  return (
    <div className='subcontainer-details'>
      <div className='subcontainer-details1'>
        <img className='image' src={attraction.image1} />
        <img className='image' src={attraction.image2} />
      </div>
      <div className='subcontainer-details2'>
        <h4 className='price'>Price: ${attraction.price}</h4>
        <br />
        <div>
          Description:
          <br />
          <br />
          <p className='parrafo'>{attraction.description}</p>
        </div>
        <br />
        <h4 className='duration'>Duration hrs: {attraction.duration_hours}</h4>
        <button className='btn'>Select Attraction</button>
      </div>
    </div>
  )
}

export default AttractionDetail
