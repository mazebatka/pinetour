import React from "react";
import "./DestinationList.css";
import { Destinations } from "../destinations/Destinations";

export const DestinationList = (props) => {
  const { destinations = [] } = props;
  console.log(
    "DestinationsList received destinations: list sector",
    destinations
  );

  if (destinations.length === 0) return <h3>No Destination available</h3>;
  return (
    <div id="destinations-list-container">
      {destinations.map((destination, index) => (
        <div key={index}>
          <Destinations destination={destination} />
        </div>
      ))}
    </div>
  );
};
