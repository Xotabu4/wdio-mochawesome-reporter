'use strict';

var _MapState = require('./MapState');

var expect = require('chai').expect;

describe('MapState Unit Tests', function () {
    it('Should return passed', function () {
        expect((0, _MapState.MapState)('pass')).to.equal('passed');
    });

    it('Should return failed', function () {
        expect((0, _MapState.MapState)('fail')).to.equal('failed');
    });

    it('Should return true when calling DidPass with a state of pass', function () {
        expect((0, _MapState.DidPass)('pass')).to.be.true; // eslint-disable-line no-unused-expressions
    });

    it('Should return true when calling DidPass with a state of passed', function () {
        expect((0, _MapState.DidPass)('passed')).to.be.true; // eslint-disable-line no-unused-expressions
    });

    it('Should return false when calling DidPass with a state of fail', function () {
        expect((0, _MapState.DidPass)('fail')).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it('Should return true when calling DidFail with a state of fail', function () {
        expect((0, _MapState.DidFail)('fail')).to.be.true; // eslint-disable-line no-unused-expressions
    });

    it('Should return true when calling DidFail with a state of failed', function () {
        expect((0, _MapState.DidFail)('failed')).to.be.true; // eslint-disable-line no-unused-expressions
    });

    it('Should return false when calling DidFail with a state of pass', function () {
        expect((0, _MapState.DidFail)('pass')).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it('Should return true when calling DidSkip with a state of skipped', function () {
        expect((0, _MapState.DidSkip)('skipped')).to.be.true; // eslint-disable-line no-unused-expressions
    });

    it('Should return true when calling DidSkip with a state of pending', function () {
        expect((0, _MapState.DidSkip)('pending')).to.be.true; // eslint-disable-line no-unused-expressions
    });

    it('Should return false when calling DidSkip with a state of pass', function () {
        expect((0, _MapState.DidSkip)('pass')).to.be.false; // eslint-disable-line no-unused-expressions
    });

    it('Should return undefined for unknown values', function () {
        expect((0, _MapState.MapState)('pending')).to.be.undefined; // eslint-disable-line no-unused-expressions
    });
});