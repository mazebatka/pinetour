import React from "react";
import "./Destinations.css";

export const Destinations = (props) => {
  const { destination } = props;
  console.log("Destination component received:", destination);

  return (
    <div id="destinations-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="id-number">{destination.id}</div>
      </div>
      <div className="title-location">
        <p className="title">{destination.title}</p>
        <p className="location">{destination.location}</p>
      </div>
    </div>
  );
};
