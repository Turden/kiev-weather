import loadWeather from '../loadWeather.js';

describe('load specification', () => {

	let xhr, request;
	beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();
        
        xhr.onCreate = req => request = req;
	});

	it('should send GET-request to weather path', () => {
		loadWeather();
		let { url, method } = request;

		expect(url).to.be('/weather');
		expect(method).to.be('GET');
	});

	afterEach(() => {
		xhr.restore();
	});
});