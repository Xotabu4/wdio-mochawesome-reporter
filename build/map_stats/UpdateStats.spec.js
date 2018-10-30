'use strict';

var _UpdateStats = require('./UpdateStats');

var _UpdateStats2 = _interopRequireDefault(_UpdateStats);

var _InitStats = require('./InitStats');

var _InitStats2 = _interopRequireDefault(_InitStats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

describe('UpdateStats Unit Tests', function () {
    it('Should incremet pass', function () {
        var stats = (0, _InitStats2.default)({ stats: { start: 1, end: 2, _duration: 3 } });
        stats = (0, _UpdateStats2.default)(stats, { pass: true });

        expect(stats.tests).to.equal(1);
        expect(stats.testsRegistered).to.equal(1);
        expect(stats.passes).to.equal(1);
        expect(stats.failures).to.equal(0);
        expect(stats.pending).to.equal(0);
        expect(stats.passPercent).to.equal(100);
        expect(stats.pendingPercent).to.equal(0);
    });

    it('Should incremet fail', function () {
        var stats = (0, _InitStats2.default)({ stats: { start: 1, end: 2, _duration: 3 } });
        stats = (0, _UpdateStats2.default)(stats, { fail: true });

        expect(stats.tests).to.equal(1);
        expect(stats.testsRegistered).to.equal(1);
        expect(stats.passes).to.equal(0);
        expect(stats.failures).to.equal(1);
        expect(stats.pending).to.equal(0);
        expect(stats.passPercent).to.equal(0);
        expect(stats.pendingPercent).to.equal(0);
    });

    it('Should incremet pending', function () {
        var stats = (0, _InitStats2.default)({ stats: { start: 1, end: 2, _duration: 3 } });
        stats = (0, _UpdateStats2.default)(stats, { pending: true });

        expect(stats.tests).to.equal(1);
        expect(stats.testsRegistered).to.equal(1);
        expect(stats.passes).to.equal(0);
        expect(stats.failures).to.equal(0);
        expect(stats.pending).to.equal(1);
        expect(stats.passPercent).to.equal(0);
        expect(stats.pendingPercent).to.equal(100);
    });

    it('Should retain values', function () {
        var stats = (0, _InitStats2.default)({ stats: { start: 1, end: 2, _duration: 3 } });
        stats = (0, _UpdateStats2.default)(stats, { pass: true });
        stats = (0, _UpdateStats2.default)(stats, { pass: true });
        stats = (0, _UpdateStats2.default)(stats, { pass: true });
        stats = (0, _UpdateStats2.default)(stats, { fail: true });
        stats = (0, _UpdateStats2.default)(stats, { fail: true });
        stats = (0, _UpdateStats2.default)(stats, { pending: true });

        expect(stats.tests).to.equal(6);
        expect(stats.testsRegistered).to.equal(6);
        expect(stats.passes).to.equal(3);
        expect(stats.failures).to.equal(2);
        expect(stats.pending).to.equal(1);
        expect(stats.passPercent).to.equal(50);
        expect(stats.pendingPercent).to.equal(17);
    });
});