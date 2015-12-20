/**
 * Created by Eugene on 20.12.2015.
 */
module.exports = function (f) {
    if (typeof f !== 'number') {
        throw new TypeError('Expected a number');
    }

    return (f*1.60934);
};