import React from "react";
import "./Destinations.css";
import { destinations } from "../../../data";

export const Destinations = (props) => {
  const { destination, index } = props;
  console.log("Destination component received:", destination, index);

  return (
    <div id="destinations-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="id-number">{destination.id}</div>
      </div>
      <div className="title-location">
        <p className="title">{destination.title}</p>
        <p className="location">{destination.location}</p>
      </div>
      {index < destinations.length - 1 && <div id="trip-line"></div>}
    </div>
  );
};
