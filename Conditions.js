import React from "react";
import "./Conditions.css";

export default function Conditions(response) {
  return (
    <ul>
      <li>
        Description: <span id="description"> Sunny </span>
      </li>
      <li>
        Humidity: <span id="humidity"> 50 </span>%
      </li>
      <li>
        Wind: <span id="wind"> 10 </span> km/h
      </li>
    </ul>
  );
}
