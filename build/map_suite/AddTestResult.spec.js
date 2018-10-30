'use strict';

var _AddTestResult = require('./AddTestResult');

var _AddTestResult2 = _interopRequireDefault(_AddTestResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

describe('AddTestResult Unit Tests', function () {
    it('Should successfully Add A Passing Test', function () {
        var testResult = {
            pass: true,
            fail: false,
            pending: false
        };
        var suiteResult = (0, _AddTestResult2.default)({ tests: [], passes: [] }, testResult);

        expect(suiteResult.tests.length).to.equal(1);
        expect(suiteResult.passes.length).to.equal(1);
    });
    it('Should successfully Add A Failing Test', function () {
        var testResult = {
            pass: false,
            fail: true,
            pending: false
        };
        var suiteResult = (0, _AddTestResult2.default)({ tests: [], failures: [] }, testResult);

        expect(suiteResult.tests.length).to.equal(1);
        expect(suiteResult.failures.length).to.equal(1);
    });
    it('Should successfully Add A Pending Test', function () {
        var testResult = {
            pass: false,
            fail: false,
            pending: true
        };
        var suiteResult = (0, _AddTestResult2.default)({ tests: [], pending: [] }, testResult);

        expect(suiteResult.tests.length).to.equal(1);
        expect(suiteResult.pending.length).to.equal(1);
    });
});