import React from 'react'
import './Attractions.css';

const AttractionItinerary = ({ itinerary, deleteItineraryItem, location }) => {

  const emailItinerary = () => {
    //TODO: write this method
  }

  const totalCost = () => itinerary.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="subcontainer-itinerary">
      {itinerary.map((item) => {
        const { id, dayNumber, name, durationHours, price } = item;
        return (
          <div className="itinerary-item" key={id}>
            <div>
              <h5>Day: {dayNumber}</h5>
              <h5>Attraction: {name}</h5>
              <h5>Hours: {durationHours}</h5>
              <h5>Cost: {price}</h5>
            </div>
            <button className="delete-button" onClick={() => deleteItineraryItem(id)}>Delete</button>
          </div>)
      })}
      {itinerary.length > 0 ?
        <div>
          <h4> Total Cost: ${totalCost()}</h4>
          <button onClick={() => emailItinerary()} >Email My Itinerary</button>
        </div>
        : null}
    </section >

    // <div className="subcontainer-itinerary">

    //   <div className="day-itinerary">Day 1</div>

    //   <div>
    //     <h5 className="name-itinerary">{itinerary.name}</h5>
    //     <h5 className="price-itinerary">Price: ${attraction.price}</h5>
    //   </div>

    //   <div className="subcontainer-itinerary1">
    //     <img className="image" src={attraction.image1} />
    //   </div>

    // </div>
  )
}

export default AttractionItinerary
