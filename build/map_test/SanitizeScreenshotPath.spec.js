'use strict';

var _SanitizeScreenshotPath = require('./SanitizeScreenshotPath');

var _SanitizeScreenshotPath2 = _interopRequireDefault(_SanitizeScreenshotPath);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

describe('SanitizeScreenshotPath Unit Tests', function () {
    it('Should return a relative path', function () {
        var mochawesomeOpts = {
            screenshotUseRelativePath: true
        };
        expect((0, _SanitizeScreenshotPath2.default)(mochawesomeOpts, '/Results/screenshots')).to.equal('Results/screenshots');
    });

    it('Should return a absolute path', function () {
        var mochawesomeOpts = {
            screenshotUseRelativePath: false
        };
        expect((0, _SanitizeScreenshotPath2.default)(mochawesomeOpts, './Results/screenshots')).to.equal(_path2.default.join(__dirname, '../../') + 'Results/screenshots');
    });
});