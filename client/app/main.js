var superagent = require("superagent");

superagent
  .get('/weather')
  .end(function(err, res){
    if(err) {
      document.body.innerHTML = err.toString();
    } else {
      weather = res.body;
      weather.currentDate = new Date(weather.currentDate);
      var info = `${weather.currentDate.toLocaleString()} at ${weather.place}<br/>Temperature is ${weather.temperature}°C`;
      document.body.innerHTML = info;
    }
  });