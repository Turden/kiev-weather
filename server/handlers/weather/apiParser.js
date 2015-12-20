var fahrenheitToCelsius = require('./fahrenheitToCelsius');
var MileToKilometrs = require('./MileToKilometrs');

function parser (apiData) {
  var currently = apiData.currently;

  return {
    place: apiData.timezone,
    currentDate: new Date(currently.time*1000),
    temperature: Math.round(fahrenheitToCelsius(currently.temperature)),
    windSpeed: Math.round(MileToKilometrs(currently.windSpeed))
  }
}

module.exports = parser;