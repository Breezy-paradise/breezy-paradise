import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import Attractions from '../components/Attractions'
import AttractionDetail from '../components/AttractionDetail'
import AttractionItinerary from '../components/AttractionItinerary'
import './Attractions.css'

const AttractionsView = (props) => {
  const [attractionList, setAttractionList] = useState([])
  const [currentAttraction, setCurrentAttraction] = useState()
  const [location, setLocation] = useState()
  const [userItinerary, setUserItinerary] = useState([])

  // Get the routing params (instead of props.match.params)
  let params = useParams()
  let locationId = params.id

  useEffect(() => {
    const getData = async () => {
      try {
        const attractionsResult = await axios.get(
          `/api/attractions/${locationId}`
        )
        setAttractionList(attractionsResult.data)

        const locationResult = await axios.get(`/api/locations/${locationId}`)
        setLocation(locationResult.data)
      } catch (err) {
        if (err.isAxiosError) {
          console.log(err.response.request.responseText)
        } else {
          console.log(err)
        }
      }
    }

    getData()
    getItineraryData()
  }, [props.user])

  const getItineraryData = async () => {
    try {
      //if not logged in, clear the itinerary
      if (!props.user.username) {
        setUserItinerary([])
        return
      }
      const itineraryResult = await axios.get(`/api/itinerary/${locationId}`)
      setUserItinerary(itineraryResult.data)
    } catch (err) {
      if (err.isAxiosError) {
        console.log(err.response.request.responseText)
      } else {
        console.log(err)
      }
    }
  }

  const addAttractionToItinerary = async (dayNumber, attractionId) => {
    // insert attraction to db user_itinerary table
    let body = { dayNumber, attractionId }
    try {
      await axios.post('/api/itinerary', body)
      getItineraryData()
    } catch (err) {
      if (err.isAxiosError) {
        console.log(err.response.request.responseText)
        alert(err.response.request.responseText)
      } else {
        console.log(err)
      }
    }
  }

  const deleteItineraryItem = (itineraryId) => {
    // TODO: Not Yet Implemented
    // delete the itinerary item
    getItineraryData()
  }

  const setAttraction = (attraction) => {
    setCurrentAttraction(attraction)
  }

  return (
    <div className='container'>
      <div className='container1'>
        <h2> {location ? location.name : ''} Attractions</h2>
        {attractionList.map((attraction) => (
          <Attractions
            attraction={attraction}
            setCurrentAttraction={setAttraction}
          />
        ))}
      </div>

      <div className='container2'>
        <h2>Attraction Details</h2>
        <h3>{currentAttraction ? currentAttraction.name : ''}</h3>
        <AttractionDetail
          attraction={currentAttraction}
          addAttractionToItinerary={addAttractionToItinerary}
        />
      </div>

      <div className='container3'>
        <h2>Itinerary</h2>
        <AttractionItinerary
          itinerary={userItinerary}
          deleteItineraryItem={deleteItineraryItem}
        />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(AttractionsView)
