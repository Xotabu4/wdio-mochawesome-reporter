'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var MapState = exports.MapState = function MapState(state) {
    switch (state.toLowerCase()) {
        case 'pass':
            return 'passed';
        case 'fail':
            return 'failed';
        default:
            break;
    }
};

var DidPass = exports.DidPass = function DidPass(state) {
    return state.toLowerCase() === 'pass' || state.toLowerCase() === 'passed';
};

var DidFail = exports.DidFail = function DidFail(state) {
    return state.toLowerCase() === 'fail' || state.toLowerCase() === 'failed';
};

var DidSkip = exports.DidSkip = function DidSkip(state) {
    return state.toLowerCase() === 'pending' || state.toLowerCase() === 'skipped';
};