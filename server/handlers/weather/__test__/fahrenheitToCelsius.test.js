var conv = require("../fahrenheitToCelsius");

describe('Convert', function () {

	it('should convert F to C', function () {
		expect(conv(32).toFixed(2)).to.be('0.00');
		expect(conv(33.8).toFixed(2)).to.be('1.00');
		expect(conv(30.2).toFixed(2)).to.be('-1.00');
		expect(conv(0).toFixed(2)).to.be('-17.78');
	});
});