import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Locations.css'

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
        <div>
            {locations.map(({ id, name, image1, image2, image3, description }) => {
                return (
                    <Link to={`/breezy-paradise/location/${id}`} key={id}>
                        <div className="container">
                            <div className='card-container'>
                                <div className="image-container">
                                    <img src={image1} alt='' />
                                </div>
                                <div className="card-title">
                                    <h3 className="main-title">{name}</h3>
                                </div>
                                <p>{description}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Locations
