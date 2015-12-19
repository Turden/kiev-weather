import config from '../../package.json';
let body = window.document.body;

let weatherReceived = weather => {
  let date = new Date(weather.currentDate);
  let info = `${date.toLocaleString()} at ${weather.place}<br/>Temperature is ${weather.temperature}°C`;
  body.innerHTML = info + '<br/>version: ' + config.version;
};

export default weatherReceived;
