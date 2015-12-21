import weatherReceived from './weatherReceived.js';
import loadWeather from './loadWeather.js';

document.title = 'kiev-weather';
let interval = 1000;
let errors = [];
let failed = err => {
	errors.push(err);
	if (errors.length === 1)
		document.body.innerHTML += '<br/>Application shutdown at ' + new Date().toLocaleString() + '<br/>' + err.toString();
	let nextInterval = n => Math.round(n*Math.log2(n)*2000 + 1000);
	interval = nextInterval(errors.length);
	document.body.innerHTML += '<br/>Error. Next retry after ' + interval/1000 + ' s';
};
let success = data => {
	errors = [];
	interval = 1000;
	weatherReceived(data);
};

(function timeout() {
    setTimeout(function () {
	loadWeather(d => { success(d); timeout(); }, d => { failed(d); timeout(); });
    }, interval);
})();
