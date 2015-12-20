/**
 * Created by Eugene on 20.12.2015.
 */
var ff = require('../MileToKilometrs');

describe('Convert speed', function () {

    it('should convert M to Km', function () {
        expect(ff(1).toFixed(2)).to.be('1.61');
        expect(ff(10).toFixed(2)).to.be('16.09');
        expect(ff(0).toFixed(2)).to.be('0.00');
    });
});
