import config from '../../package.json';
let body = window.document.body;

let weatherReceived = weather => {
  let date = new Date(weather.currentDate);
  let info = `${date.toLocaleString()} at ${weather.place}<br/>Temperature is ${weather.temperature}°C`;
  info += `<br/>wind speed is ${weather.windSpeed} km/h`;
  body.innerHTML = info + '<br/>version: ' + config.version;
};

export default weatherReceived;
