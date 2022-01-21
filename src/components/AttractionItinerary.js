import React, { useState } from 'react';
import axios from 'axios';
import './Attractions.css';
import './AttractionItinerary.css';

const AttractionItinerary = ({ itinerary, deleteItineraryItem, location }) => {

  const emailItinerary = async () => {
    try {
      await axios.post('/api/send_itinerary', { itinerary, location });
      alert(`Itinerary For ${location.name} Sent`);
    }
    catch (err) {
      if (err.isAxiosError) {
        console.log(err.response.request.responseText);
        alert(err.response.request.responseText);
      } else {
        console.log(err);
      }
    }
  };

  const totalCost = () => itinerary.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      {itinerary.length > 0 ?
        <section className="itinerary-section">
          <div className="itinerary-border">
            {itinerary.map((item) => {
              const { id, dayNumber, name, durationHours, price } = item;
              return (
                <div className="itinerary-item" key={id}>

                  <h5>Day: <span>{dayNumber}</span></h5>
                  <h5 className="itinerary-attraction"> <span>{name}</span></h5>
                  <h5>Hours: <span>{durationHours}</span></h5>
                  <h5 className="itinerary-cost">Cost: <span>${price}</span></h5>

                  <button className="delete-button" onClick={() => deleteItineraryItem(id)}>Delete</button>
                </div>)
            })}
          </div>
          <div>
            <h4> Total Cost: ${totalCost()}</h4>
            <button onClick={() => emailItinerary()}>Email My Itinerary</button>
          </div>
        </section>
        : null}
    </div>
  )
}

export default AttractionItinerary;
