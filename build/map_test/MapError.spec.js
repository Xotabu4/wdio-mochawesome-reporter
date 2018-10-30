'use strict';

var _MapError = require('./MapError');

var _MapError2 = _interopRequireDefault(_MapError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

describe('MapError Unit Tests', function () {
    it('Should return error object without actual and expected', function () {
        var error = {
            type: 'Timeout Error',
            message: 'Timed out waiting for visibility of element #foo',
            stack: 'At line 12 of blah.js'
        };

        var err = (0, _MapError2.default)(error);

        expect(err.name).to.equal(error.type);
        expect(err.message).to.equal(error.message);
        expect(err.estack).to.equal(error.stack);
        expect(err.stack).to.equal(error.stack);
    });
    it('Should return error object with actual and expected', function () {
        var error = {
            type: 'Assertion Error',
            message: 'Assertion Failed expected "1" to be "2"',
            stack: 'At line 12 of blah.js',
            actual: '1',
            expected: '2'
        };

        var err = (0, _MapError2.default)(error);

        expect(err.name).to.equal(error.type);
        expect(err.message).to.equal(error.message);
        expect(err.estack).to.equal(error.stack);
        expect(err.stack).to.equal(error.stack);
        expect(err.actual).to.equal(error.actual);
        expect(err.expected).to.equal(error.expected);
        expect(err.showDiff).to.be.true; // eslint-disable-line no-unused-expressions
    });
});