import React from 'react'
import './Attractions.css';

let attraction =   
    {
      id='1',
      name='Statue of Liberty and Ellis Island Tour',
      image1='https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/72/13/b5.jpg',
      image2='https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/9b/76/3f.jpg',
      description='Visits to the Statue of Liberty National Monument and Ellis Island are musts in the Big Apple. On this guided tour, you get boarding on the ferry from Manhattan to visit the two important historical sites. Visit the grounds of Liberty Island and go inside the Statue of Liberty Museum. Then hop the ferry to Ellis Island and learn about the millions of people who arrived here between 1892 and 1954 in hope of living the American dream.',
      location_id = '1',
      duration_hours= '3',
      price='44',
      }

const AttractionItinerary = (attraction) => {

  return ( 
      <div className="subcontainer-itinerary">

          <div className="day-itinerary">Day 1</div>

          <div>
              <h5 className="name-itinerary">{attraction.name}</h5>
              <h5 className="price-itinerary">Price: ${attraction.price}</h5>
          </div>

          <div className="subcontainer-itinerary1">
            <img className="image" src={attraction.image1} />
          </div>

      </div>
  )
}

export default AttractionItinerary
