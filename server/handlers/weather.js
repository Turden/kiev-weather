var fahrenheitToCelsius = require('fahrenheit-to-celsius');
var request = require("request-promise");

var kyiv = {
  lat: 50.450100,
  lon: 30.523400
};
var apiKey = "55a0bdf7aa19f69b7a88b3bb7c990963";
var apiUri = "https://api.forecast.io/forecast/";

var uri = `${apiUri}${apiKey}/${kyiv.lat},${kyiv.lon}`;

function error (err) {
  console.error(err);
}

function parser  (apiData) {
  var currently = apiData.currently;

  return {
    place: apiData.timezone,
    currentDate: new Date(currently.time*1000),
    temperature: Math.round(fahrenheitToCelsius(currently.temperature))
  }
}

module.exports = function(req, res) {
  request(uri)
    .then(function (apiResponse) {
      res.json(parser(JSON.parse(apiResponse)));
    })
    .catch(error)
};