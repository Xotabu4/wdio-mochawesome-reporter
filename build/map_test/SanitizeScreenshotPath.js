'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (mochawesomeOpts, screenshotPath) {
    var sp = screenshotPath.replace('//$/', '');
    if (mochawesomeOpts && mochawesomeOpts.screenshotUseRelativePath) {
        // screenshots will be in a folder under the mochawesome report
        sp = _path2.default.join('./', sp);
    } else {
        // absolute path
        sp = _path2.default.resolve(sp);
    }
    return sp;
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];