import React, { useState, useEffect } from 'react'
import './Attractions.css'

const AttractionDetail = ({ attraction, addAttractionToItinerary }) => {
  //TODO: add a dayNumber selector
  const [dayNumber, setDayNumber] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(dayNumber)
  }

  return (
    <div>
      {/* Only render an attraction if one is selected */}
      {attraction ? (
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
            <h4 className='duration'>
              Duration hrs: {attraction.duration_hours}
            </h4>

            <div className='container-form'>
              <form action='' onSubmit={handleSubmit}>
                <div className='container-form-detail'>
                  <div>
                    <select
                      name=''
                      id=''
                      className='select'
                      onChange={(e) => setDayNumber(e.target.value)}
                    >
                      <option value='Day 1'>Day 1</option>
                      <option value='Day 2'>Day 2</option>
                      <option value='Day 3'>Day 3</option>
                      <option value='Day 4'>Day 4</option>
                      <option value='Day 5'>Day 5</option>
                      <option value='Day 6'>Day 6</option>
                      <option value='Day 7'>Day 7</option>
                    </select>
                  </div>

                  <div>
                    <button
                      type='submit'
                      // onClick={() =>
                      //   addAttractionToItinerary(dayNumber, attraction.id)
                      // }
                      className='btn'
                    >
                      Select Attraction
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h3> Select an Attraction </h3>
      )}
    </div>
  )
}

export default AttractionDetail
