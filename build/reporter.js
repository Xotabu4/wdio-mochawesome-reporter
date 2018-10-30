'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map_test = require('./map_test');

var _map_suite = require('./map_suite');

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _writeResults = require('./writeResults');

var _writeResults2 = _interopRequireDefault(_writeResults);

var _map_stats = require('./map_stats');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Initialize a new `Mochawesome` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

/* Note:
* Hierarchy of the WDIO reporting is: runner > spec > suite > test
*/
var WdioMochawesomeReporter = function (_events$EventEmitter) {
    _inherits(WdioMochawesomeReporter, _events$EventEmitter);

    function WdioMochawesomeReporter(baseReporter, config) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, WdioMochawesomeReporter);

        var _this = _possibleConstructorReturn(this, (WdioMochawesomeReporter.__proto__ || Object.getPrototypeOf(WdioMochawesomeReporter)).call(this));

        _this.baseReporter = baseReporter;
        _this.config = config;
        _this.options = options;

        var epilogue = _this.baseReporter.epilogue;


        _this.on('end', function () {
            // structure for mochawesome json reporter
            var results = {
                stats: (0, _map_stats.InitStats)(_this.baseReporter),
                suites: [],
                copyrightYear: new Date().getFullYear()

                // build the mochawesome root suite.
            };var rootSuite = (0, _map_suite.MapSuiteResult)(true, { 'title': '' });
            results.suites = rootSuite;

            // runner loop
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(_this.baseReporter.stats.runners)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var cid = _step.value;

                    var runnerInfo = _this.baseReporter.stats.runners[cid];
                    // Removed secret mentioning for specific project. Slicing copies as new string
                    var sanitizedCapabilities = runnerInfo.sanitizedCapabilities.slice().replace(/\?private_token=.*$/, '');
                    // specs loop
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = Object.keys(runnerInfo.specs)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var specId = _step2.value;

                            var specInfo = runnerInfo.specs[specId];

                            // suites loop
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = Object.keys(specInfo.suites)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var suiteName = _step3.value;

                                    var suiteInfo = specInfo.suites[suiteName];

                                    // exclude before all and after all 'suites'
                                    if (!suiteInfo.uid.includes('before all') && !suiteInfo.uid.includes('after all') && Object.keys(suiteInfo.tests).length > 0) {
                                        var suiteResult = (0, _map_suite.MapSuiteResult)(false, suiteInfo, sanitizedCapabilities);

                                        // tests loop
                                        var _iteratorNormalCompletion4 = true;
                                        var _didIteratorError4 = false;
                                        var _iteratorError4 = undefined;

                                        try {
                                            for (var _iterator4 = Object.keys(suiteInfo.tests)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                                var testName = _step4.value;

                                                var testResult = (0, _map_test.MapTestResult)(suiteInfo.tests[testName], suiteResult.uuid, _this.config, runnerInfo.sessionID);
                                                suiteResult = (0, _map_suite.AddTestResult)(suiteResult, testResult);
                                                results.stats = (0, _map_stats.UpdateStats)(results.stats, testResult);
                                            }
                                        } catch (err) {
                                            _didIteratorError4 = true;
                                            _iteratorError4 = err;
                                        } finally {
                                            try {
                                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                                    _iterator4.return();
                                                }
                                            } finally {
                                                if (_didIteratorError4) {
                                                    throw _iteratorError4;
                                                }
                                            }
                                        }

                                        results.suites.suites.push(suiteResult);
                                        results.stats.suites += 1;
                                    }
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            (0, _writeResults2.default)(results, _this.options);
            epilogue.call(baseReporter);
        });
        return _this;
    }

    return WdioMochawesomeReporter;
}(_events2.default.EventEmitter);

exports.default = WdioMochawesomeReporter;
module.exports = exports['default'];