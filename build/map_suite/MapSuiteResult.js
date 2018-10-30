'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (isRoot, data, saniCaps) {
    var suite = {
        'title': '',
        'suites': [],
        'tests': [],
        'pending': [],
        'root': isRoot,
        'fullFile': '',
        'file': '',
        'passes': [],
        'failures': [],
        'skipped': [],
        'duration': 0,
        'rootEmpty': data.rootEmpty,
        '_timeout': 0,
        'uuid': (0, _v2.default)(),
        'beforeHooks': [],
        'afterHooks': []
    };

    if (!isRoot) {
        suite.title = data.title;

        if (saniCaps) {
            suite.title = suite.title + ' (' + saniCaps + ')';
        }

        if (data._duration) {
            suite.duration = data._duration;
        }
    }

    return suite;
};

module.exports = exports['default'];