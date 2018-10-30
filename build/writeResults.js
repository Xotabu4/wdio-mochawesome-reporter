'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (json, options) {
    if (!options || typeof options.outputDir !== 'string') {
        return console.log('Cannot write json report: empty or invalid \'outputDir\'.');
    }

    try {
        var dir = _path2.default.resolve(options.outputDir);
        var filename = options.mochawesome_filename ? options.mochawesome_filename : 'wdiomochawesome.json';
        var filepath = _path2.default.join(dir, filename);
        _mkdirp2.default.sync(dir);
        _fs2.default.writeFileSync(filepath, JSON.stringify(json));
        console.log('Wrote json report to [' + options.outputDir + '].');
    } catch (e) {
        console.log('Failed to write json report to [' + options.outputDir + ']. Error: ' + e);
    }
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

// outputs json and html reports