'use strict';

var _MapSuiteResult = require('./MapSuiteResult');

var _MapSuiteResult2 = _interopRequireDefault(_MapSuiteResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

describe('MapSuiteResult Unit Tests', function () {
    it('Should return a vaild Test Suite', function () {
        var data = {
            title: 'Sample Suite',
            '_duration': 500
        };
        var suiteResult = (0, _MapSuiteResult2.default)(false, data, 'phantomjs');
        expect(suiteResult.title).to.equal('Sample Suite (phantomjs)');
        expect(suiteResult.duration).to.equal(500);
        expect(suiteResult.root).to.be.false; // eslint-disable-line no-unused-expressions
        expect(suiteResult.uuid).to.be.not.empty; // eslint-disable-line no-unused-expressions
    });
});