var superagent = require('superagent');
var config = require('../../package.json');

superagent
  .get('/weather')
  .end((err, res) => {
    if(err) {
      error(err);
    }
    else {
      success(res.body);
    }
  });

function error(err) {
  document.body.innerHTML = err.toString();
}

function success(weather) {
    weather.currentDate = new Date(weather.currentDate);
    let info = `${weather.currentDate.toLocaleString()} at ${weather.place}<br/>Temperature is ${weather.temperature}°C`;
    document.body.innerHTML = info + "<br/>version: " + config.version;
}