var parser = require("../apiParser.js");
var toUnixTimestamp = t => t.getTime()/1000;

describe('Api parser', function () {

  it('should return Date from timestamp', function () {
    var expectedDate = new Date();

    var a = parser({ currently: { time: toUnixTimestamp(expectedDate), temperature: 1 } });

    expect(a.currentDate).to.be.a(Date);
    expect(a.currentDate.getTime()).to.be(expectedDate.getTime());
  });
});