import React from "react";
import "./DisplayTempUnit.css";
import Weather from "./Weather.js";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function DisplayTempUnit(props) {
  return (
    <div>
      <i className="far-fa-sun"></i>
      <span className="celfarNumber" id="temperatureData">
        25
      </span>
      <Weather icon="CLEAR_DAY" color="yellow" size="100" />
      <span className="unit">
        <a herf="#" id="celcius-link" class="active">
          {" "}
          °C{" "}
        </a>{" "}
        |
        <a herf="#" id="farenheit-link">
          {" "}
          °F{" "}
        </a>
      </span>
    </div>
  );
}
