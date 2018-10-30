'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data, mochawesomeOpts, screenshotPath, sessionId) {
    var testContext = [];
    // add session id to test context for debugging research
    testContext.push({
        title: 'Session Id',
        value: sessionId
    });
    // context can be specified in a Mocha test if there is any add it first
    if (data.context) {
        if (Array.isArray(data.context)) {
            data.context.forEach(function (ctx) {
                testContext.push(ctx);
            });
        } else {
            testContext.push(data.context);
        }
    }

    if (mochawesomeOpts && mochawesomeOpts.includeScreenshots) {
        /**
         * output is a log of all the wdio commands issued for a test
         * we can filter this for any screenshot commands and include them in the context array
         */
        var screenshotCommands = data.output.filter(function (cmd) {
            return cmd.type === 'screenshot';
        });
        if (screenshotCommands.length > 0) {
            var sp = (0, _SanitizeScreenshotPath2.default)(mochawesomeOpts, screenshotPath);
            // https://github.com/adamgruber/mochawesome#example
            screenshotCommands.forEach(function (cmd) {
                // if the payload file name does not contain a path, then add the path given in the config file
                if (cmd.payload.filename.indexOf(_path2.default.sep) === -1) {
                    testContext.push({
                        title: 'Screenshot: ' + cmd.payload.filename,
                        value: _path2.default.join(sp, cmd.payload.filename)
                    });
                } else {
                    testContext.push({
                        title: 'Screenshot: ' + _path2.default.basename(cmd.payload.filename),
                        value: cmd.payload.filename
                    });
                }
            });
        }
    }
    return testContext;
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _SanitizeScreenshotPath = require('./SanitizeScreenshotPath');

var _SanitizeScreenshotPath2 = _interopRequireDefault(_SanitizeScreenshotPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];