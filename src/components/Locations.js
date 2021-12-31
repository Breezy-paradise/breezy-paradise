import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Locations.css";

const Locations = ({ title, imageUrl, body }) => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    //Axios will go here.
    axios
      .get("/api/locations")
      .then((res) => {
        console.log("Response Received!");
        setLocations(res.data);
      })
      .catch((err) => {
        if (err.isAxiosError) {
          console.log(err.response.request.responseText);
        } else {
          console.log(err);
        }
      });
  }, []);

  return (
    <div>
        {locations.map((item) => {
        // <div className="container">
        //     <div className="card-container">
        //         <div className="image-container">
        //     <img src={item.image1} alt="" />
        //         </div>
        //   <div className="card-title">
        //     <h3 className="main-title">{item.name}</h3>
        //   </div>

        //   <div className="btn">
        //     <button>
        //       <a>View Attractions</a>
        //     </button>
        //   </div>
        //   </div>
        // </div>}
        
        <h2>{item.name}</h2>)
        }
{/* 
        

        <div className="card-container">
          <div className="image-container">
            <img src={imageUrl} alt="" />
          </div>
          <div className="card-title">
            <h3 className="main-title">{title}</h3>
          </div>

          <div className="btn">
            <button>
              <a>View Attractions</a>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card-container">
          <div className="image-container">
            <img src={imageUrl} alt="" />
          </div>
          <div className="card-title">
            <h3 className="main-title">{title}</h3>
          </div>

          <div className="btn">
            <button>
              <a>View Attractions</a>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Locations;
