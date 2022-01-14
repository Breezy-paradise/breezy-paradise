import React from 'react'
<<<<<<< Updated upstream
import './Attractions.css';

let attraction =
{
  id: '1',
  name: 'Statue of Liberty and Ellis Island Tour',
  image1: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/72/13/b5.jpg',
  image2: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/9b/76/3f.jpg',
  description: 'Visits to the Statue of Liberty National Monument and Ellis Island are musts in the Big Apple. On this guided tour, you get boarding on the ferry from Manhattan to visit the two important historical sites. Visit the grounds of Liberty Island and go inside the Statue of Liberty Museum. Then hop the ferry to Ellis Island and learn about the millions of people who arrived here between 1892 and 1954 in hope of living the American dream.',
  location_id: '1',
  duration_hours: '3',
  price: '44',
}

const AttractionDetail = (attraction) => {
  return ( 

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

      <button className="btn">Select Attraction</button>
=======
import './Attractions.css'

const AttractionDetail = ({ attraction }) => {
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
>>>>>>> Stashed changes
    </div>

  </div>

  )
}

export default AttractionDetail