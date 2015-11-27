'use strict'

let request = require("request-promise");
let parser = require("./parseWeatherData.js");

let kyiv = {
  lat: 50.450100,
  lon: 30.523400
};
let apiKey = "55a0bdf7aa19f69b7a88b3bb7c990963";
let apiUri = "https://api.forecast.io/forecast/";

let uri = `${apiUri}${apiKey}/${kyiv.lat},${kyiv.lon}`;

request(uri)
    .then(success)
    .catch(error);

function success (apiResponse) {
  var weather = parser(JSON.parse(apiResponse));
  console.log(`${weather.currentDate.toLocaleString()} at ${weather.place}\r\nTemperature is ${weather.temperature}°C`);
}

function error (err) {
  console.error(err);
}