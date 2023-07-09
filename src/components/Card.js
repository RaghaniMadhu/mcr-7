import React from "react";
import { GoLocation } from "react-icons/go";

function Card({ requiredData: { name, image }, onClick }) {
  return (
    <div className="card cursor-pointer" onClick={onClick}>
      <img src={image} alt={name} className="image" />
      <p className="margin-block-0 location-name flex-row gap-point-2">
        <GoLocation className="icons" /> {name}
      </p>
    </div>
  );
}

export default Card;
