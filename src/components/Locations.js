import React, { Component, useEffect } from 'react'
import axios from 'axios'
import './Locations.css'

const Locations = ({title,imageUrl,body}) => {

    useEffect(() => {
        //Axios will go here.
        axios.get("http://localhost:3050/api/locations")
        .then((res) => {
            console.log('Response Received!');
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
    <div>
    <div className="container">
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className = "card-title">
                <h3 className="main-title">{title}</h3>
            </div>
            
            <div className = "btn">
                <button>
                    <a>
                        View Attractions
                    </a>
                </button>
            </div>
        </div>


 <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className = "card-title">
                <h3 className="main-title">{title}</h3>
            </div>
            
            <div className = "btn">
                <button>
                    <a>
                        View Attractions
                    </a>
                </button>
            </div>
    </div>
    </div>

    <div className="container">
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className = "card-title">
                <h3 className="main-title">{title}</h3>
            </div>
           
            <div className = "btn">
                <button>
                    <a>
                        View Attractions
                    </a>
                </button>
            </div>
        </div>
    </div>
    
    </div>
    )
}

export default Locations
