import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Attractions from '../components/Attractions'
import AttractionDetail from '../components/AttractionDetail'
import AttractionItinerary from '../components/AttractionItinerary'
import attractionsDb from './attractionsDb'
import './Attractions.css';

const AttractionsView = () => {
  const [attraction, setAttraction] = useState([]);
  const [location, setLocation] = useState();
  const [userItinerary, setUserItinerary] = useState([]);

  // Get the routing params (instead of props.match.params)
  let params = useParams();
  // TODO: Use this locationId instead of the hardcoded id's. 
  let locationId = params.id;

  useEffect(() => {
    const getData = async () => {
      try {
        const attractionResult = await axios.get(`/api/attractions/${locationId}`);
        setAttraction(attractionResult.data);

        const locationResult = await axios.get(`/api/locations/${locationId}`);
        setLocation(locationResult.data);
      } catch (err) {
        if (err.isAxiosError) {
          console.log(err.response.request.responseText);
        } else {
          console.log(err);
        }
      }
    }

    getData();
  }, []);

  return (
    <div className="container">

      <div className="container1">
        <h2> {location ? location.name : ""} Attractions</h2>
        {attraction.map(attraction =>
          <Attractions attraction={attraction} />
        )}
      </div>

      {/* <div className="container2"> 
              <h2>Attractions Details</h2>  
              <h3>Statue of Liberty and Ellis Island Tour</h3>    
                <AttractionDetail/>
            </div>      

            <div className="container3">
              <h2>Itinerary</h2>  
                 <AttractionItinerary/> 
            </div> */}

    </div>
  )
}

export default AttractionsView
