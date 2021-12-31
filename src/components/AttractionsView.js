import React, {useEffect} from 'react'
import { useParams } from "react-router-dom";
import Attractions from '../components/Attractions'
import AttractionDetail from '../components/AttractionDetail'
import AttractionItinerary from '../components/AttractionItinerary'
import attractionsDb from './attractionsDb'
import './Attractions.css';

const AttractionsView = () => {

  // Get the routing params (instead of props.match.params)
  let params = useParams();
  // TODO: Use this locationId instead of the hardcoded id's. 
  let locationId = params.id;

  return (
      <div className="container">

            <div className="container1">
              <h2>Attractions New York</h2>
              {attractionsDb.find((p) => p.location_id === 1).map(attraction => 
                <Attractions attraction={attraction}/>
              )}
            </div>  

            <div className="container2"> 
              <h2>Attractions Details</h2>  
              <h3>Statue of Liberty and Ellis Island Tour</h3>    
                <AttractionDetail/>
            </div>      

            <div className="container3">
              <h2>Itinerary</h2>  
                 <AttractionItinerary/> 
            </div>

       </div>       
  )
}

export default AttractionsView
