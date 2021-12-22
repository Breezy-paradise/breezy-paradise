import React, { Component } from 'react'
import './Locations.css'

const Locations = ({title,imageUrl,body}) => {
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
