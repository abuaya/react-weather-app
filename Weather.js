import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Weather(props) {
  let [icon, weatherIcon] = useState(null);

  function showWeatherIcon(response) {
    weatherIcon(response.icon);
  }

  let url = `https://divyanshu013.github.io/react-animated-weather/`;
  axios.get(url).then(showWeatherIcon);

  if (icon) {
    return (
      <ReactAnimatedWeather
        icon={props.icon}
        color={props.color}
        size={props.size}
        animate="true"
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon={props.icon}
        color={props.color}
        size={props.size}
        animate="true"
      />
    );
  }
}
