'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _MapState = require('./MapState');

var _MapError = require('./MapError');

var _MapError2 = _interopRequireDefault(_MapError);

var _AddContext = require('./AddContext');

var _AddContext2 = _interopRequireDefault(_AddContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data, suiteUUID, config, sessionId) {
    var test = {
        'title': data.title,
        'fullTitle': data.title,
        'timedOut': false,
        'duration': data._duration,
        'speed': 'fast',
        'pass': (0, _MapState.DidPass)(data.state),
        'fail': (0, _MapState.DidFail)(data.state),
        'pending': (0, _MapState.DidSkip)(data.state),
        'code': '',
        'isRoot': false,
        'uuid': (0, _uuid2.default)(),
        'parentUUID': suiteUUID,
        'skipped': (0, _MapState.DidSkip)(data.state),
        'isHook': false,
        'context': JSON.stringify((0, _AddContext2.default)(data, config.mochawesomeOpts, config.screenshotPath, sessionId)),
        'state': (0, _MapState.MapState)(data.state),
        'err': (0, _MapError2.default)(data.error)
    };

    return test;
};

module.exports = exports['default'];