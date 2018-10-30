"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (error) {
    var err = {};
    if (error) {
        err.name = error.type;
        err.message = error.message;
        err.estack = error.stack;
        err.stack = error.stack;
        if (error.actual && error.expected) {
            err.showDiff = true;
            err.actual = error.actual;
            err.expected = error.expected;
        }
    }
    return err;
};

module.exports = exports["default"];