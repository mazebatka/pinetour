import React from "react";
import { DestinationList } from "./destination-list";
import { destinations } from "../../data/data";
import "./Main.css";

export const Main = () => {
  return (
    <div id="main">
      <div id="left-side-container">
        <div id="texts">
          <h4>Tours | 6 DAYS</h4>
          <h1>Destination of Our Agency</h1>
        </div>
        <div id="destination-list">
          <DestinationList destinations={destinations} />
        </div>
      </div>
      <div id="right-side-container">
        <img
          src="hero-section-img/destination-right-side.png"
          alt="destination"
        />
      </div>
    </div>
  );
};
