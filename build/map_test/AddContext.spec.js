'use strict';

var _AddContext = require('./AddContext');

var _AddContext2 = _interopRequireDefault(_AddContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

describe('AddContext Unit Tests', function () {
    it('Should return context with a the valid Session ID', function () {
        var context = (0, _AddContext2.default)({}, {}, '', 'abc123');

        expect(context.length).to.equal(1);
        expect(context[0].title).to.equal('Session Id');
        expect(context[0].value).to.equal('abc123');
    });

    it('Should return context provided by a test', function () {
        var data = {
            context: {
                title: 'sample context',
                value: 'this is a test'
            }
        };
        var context = (0, _AddContext2.default)(data, {}, '', 'abc123');
        expect(context.length).to.equal(2);
        expect(context[0].title).to.equal('Session Id');
        expect(context[0].value).to.equal('abc123');
        expect(context[1].title).to.equal('sample context');
        expect(context[1].value).to.equal('this is a test');
    });

    it('Should return multiple context provided by a test', function () {
        var data = {
            context: [{
                title: 'sample context',
                value: 'this is a test'
            }, {
                title: 'sample context2',
                value: 'another test'
            }]
        };
        var context = (0, _AddContext2.default)(data, {}, '', 'abc123');
        expect(context.length).to.equal(3);
        expect(context[0].title).to.equal('Session Id');
        expect(context[0].value).to.equal('abc123');
        expect(context[1].title).to.equal('sample context');
        expect(context[1].value).to.equal('this is a test');
        expect(context[2].title).to.equal('sample context2');
        expect(context[2].value).to.equal('another test');
    });

    it('Should return screenshots as context when file name does not include path', function () {
        var mochawesomOpts = { includeScreenshots: true };
        var data = {
            output: [{
                type: 'screenshot',
                payload: {
                    filename: 'test.png'
                }
            }]
        };

        var context = (0, _AddContext2.default)(data, mochawesomOpts, '/users/jim', 'abc123');
        expect(context.length).to.equal(2);
        expect(context[0].title).to.equal('Session Id');
        expect(context[0].value).to.equal('abc123');
        expect(context[1].title).to.equal('Screenshot: test.png');
        expect(context[1].value).to.equal('/users/jim/test.png');
    });

    it('Should return screenshots as context when file name does include path', function () {
        var mochawesomOpts = { includeScreenshots: true };
        var data = {
            output: [{
                type: 'screenshot',
                payload: {
                    filename: '/users/jim/test.png'
                }
            }]
        };

        var context = (0, _AddContext2.default)(data, mochawesomOpts, '/users/jim', 'abc123');
        expect(context.length).to.equal(2);
        expect(context[0].title).to.equal('Session Id');
        expect(context[0].value).to.equal('abc123');
        expect(context[1].title).to.equal('Screenshot: test.png');
        expect(context[1].value).to.equal('/users/jim/test.png');
    });

    it('Should not return screenshots as context when the option is on but no screenshots were taken', function () {
        var mochawesomOpts = { includeScreenshots: true };
        var data = {
            output: [{}]
        };

        var context = (0, _AddContext2.default)(data, mochawesomOpts, '/users/jim', 'abc123');
        expect(context.length).to.equal(1);
        expect(context[0].title).to.equal('Session Id');
        expect(context[0].value).to.equal('abc123');
    });
});