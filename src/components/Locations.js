import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Locations.css'
import sectionimage1 from './../images/breezy6.jpg'
import sectionimage2 from './../images/breezy7.jpg'

const Locations = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("/api/locations")
            .then((res) => {
                setLocations(res.data);
            })
            .catch((err) => {
                if (err.isAxiosError) {
                    console.log(err.response.request.responseText);
                } else {
                    console.log(err);
                }
            })
    }, []);

    return (
        <div className="wrapper">
            <div className="wrapper-1">
                <h1 className="breezy-paradise">Breezy Paradise</h1>
                <img className="" src={sectionimage1}/> 
            
                
            </div>

            <div className = "wrapper-3">
                <h1 className = "selection">Select a destination to start your journey!</h1>
            <div className="my-container">
                
                {locations.map(({ id, name, image1, image2, image3, description }) => {
                    return (
                        <Link to={`/breezy-paradise/location/${id}`} key={id}>
                        
                            <div className='card-container'>
                                <div className="image-container">
                                    <img src={image1} alt='' />
                                </div>
                                <div className="card-title">
                                    <h3 className="main-title">{name}</h3>
                                </div>
                                <p>{description}</p>
                            </div>
                        
                        </Link>
                )
                })}
            
            </div>
            </div>
            <div className="wrapper-2">
                <div className="images-section">
                    <div className="first-image-section">
                        <h2 className="plan-heading first-plan-heading">Plan Your Excitement</h2>
                        <img className="hoverimages first-img" src={sectionimage1}/> 
                    </div>
                    <div className="second-image-section">
                        <h2 className="plan-heading second-plan-heading">Plan Your Adventure</h2>
                        <img className="hoverimages second-img" src={sectionimage2}/>
                
                    </div>
                
                </div>
                
            </div>

            
            <div className = "wrapper-4">
                <div className = "featured-quote">
                    <div className = "featured-quote-content">
                        <h3 className = "featured-quote-text">
                        "'NEW YORK!' HE SAID. 'THAT'S NOT A PLACE, IT'S A DREAM.'"
                        </h3>
                        <p class = "featured-quote-author">-Ralph Ellison</p>
                    </div>
                </div>
                    
            </div>
            
        
        </div>
        
    )
    
}

export default Locations;
