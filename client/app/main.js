import weatherReceived from './weatherReceived.js';
import loadWeather from './loadWeather.js';

setInterval(() => loadWeather(weatherReceived), 1000);
