import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${props.city} is ${response.data.temperature.current}.`
    );
  }
  let apiKey = "5c04157d3b5bt2eeaa66db333fod0d64";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <Audio
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
}
