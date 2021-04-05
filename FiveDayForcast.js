import React, { useState } from "react";
import "./FiveDayForcast.css";
import Weather from "./Weather.js";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function showWeatherIcon(response) {
  return (
    <div class="row fiveDayOutlook">
      <div class="col-3 Day-1">
        06:00 <br /> Monday <br />
        <strong>High: 25°C </strong>
        <br />
        Low: 12°C
        <br />
        <Weather icon="CLEAR_DAY" color="yellow" size="50" />
      </div>

      <div class="col-3 Day-2">
        06:00 <br /> Tuesday <br />
        <strong>High: 25°C </strong>
        <br />
        Low: 12°C
        <br />
        <Weather icon="CLEAR_DAY" color="yellow" size="50" />
      </div>

      <div class="col-3 Day-3">
        06:00 <br /> Wednesday <br />
        <strong>High: 25°C </strong>
        <br />
        Low: 12°C
        <br />
        <Weather icon="CLEAR_DAY" color="yellow" size="50" />
      </div>

      <div class="col-3 Day-4">
        06:00 <br /> Thursday <br />
        <strong>High: 25°C </strong>
        <br />
        Low: 12°C
        <br />
        <Weather icon="CLEAR_DAY" color="yellow" size="50" />
      </div>
    </div>
  );
}
