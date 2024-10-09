import React from "react";
import { starter, luxury } from "../../data";
import "./Pricing.css";

export const Pricing = () => {
  return (
    <div id="pricing-container">
      <div id="pricing-texts">
        <h4>PRICING</h4>
        <h1>Pricing of Our Agency</h1>
      </div>
      <div id="features">
        <div className="list">
          <div className="pricing-item-list">
            <h4>Starter Pack</h4>
            <ul>
              {starter.map((item, index) => (
                <div>
                  <li key={index}>{item}</li>
                </div>
              ))}
            </ul>
          </div>
          <div className="price">$2100</div>
        </div>

        <div className="list">
          <div className="pricing-item-list">
            <h4>Luxury pack</h4>
            <ul>
              {luxury.map((item, index) => (
                <div>
                  <li key={index}>{item}</li>
                </div>
              ))}
            </ul>
          </div>
          <div className="price" style={{ paddingTop: "45px" }}>
            $4200
          </div>
        </div>
      </div>
    </div>
  );
};
