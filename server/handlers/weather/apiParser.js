var fahrenheitToCelsius = require('fahrenheit-to-celsius');

function parser (apiData) {
  var currently = apiData.currently;

  return {
    place: apiData.timezone,
    currentDate: new Date(currently.time*1000),
    temperature: Math.round(fahrenheitToCelsius(currently.temperature))
  }
}

module.exports = parser;