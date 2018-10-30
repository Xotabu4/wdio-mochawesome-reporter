'use strict';

var _InitStats = require('./InitStats');

var _InitStats2 = _interopRequireDefault(_InitStats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

describe('InitStats Unit Tests', function () {
    it('Should return a valid stats object', function () {
        var stats = (0, _InitStats2.default)({ stats: { start: 1, end: 2, _duration: 3 } });
        expect(stats.start).to.equal(1);
        expect(stats.end).to.equal(2);
        expect(stats.duration).to.equal(3);
    });
});