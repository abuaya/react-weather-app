import React from "react";
import "./DisplayCurrentCity.css";

export default function DisplayCurrentCity() {
  return (
    <div>
      <span className="CurrentTemperture"> The current temperture in: </span>
      <h2>
        <div className="col-10 cityName" id="displayCity">
          Sydney
        </div>
      </h2>
    </div>
  );
}
