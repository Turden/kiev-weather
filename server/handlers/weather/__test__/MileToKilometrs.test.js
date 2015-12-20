/**
 * Created by Eugene on 20.12.2015.
 */
var conv = require('../MileToKilometrs');

describe('Convert_speed', function () {

    it('should convert M to Km', function () {
        expect(conv(1).toFixed(2)).to.be('1.61');
        expect(conv(10).toFixed(2)).to.be('16,09');
        expect(conv(0).toFixed(2)).to.be('0.00');
    });
});
