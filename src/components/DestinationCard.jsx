import React from "react";
import './style.css'

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">  
    <div className="content">
        <div>
      <img
        src={destination.image}
        alt={destination.name}
      />
      </div>
      <div className="Text">
        <h2>{destination.name}</h2>
        <p>{destination.location}</p>
        <p>{destination.description}</p>
        <p>{destination.price}</p>
      </div>
      </div>
    </div>
  );
};

export default DestinationCard;