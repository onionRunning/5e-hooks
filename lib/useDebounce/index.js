"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useDebounce = function (fn, options) {
    var delayTime = options.delayTime || 0;
    var isImmediate = options.isImmediate || false;
    var timer = react_1.useRef(0);
    var fnRef = react_1.useRef(fn);
    var cancel = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    };
    var run = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        cancel();
        if (isImmediate) {
            var isCallNow = !timer.current;
            timer.current = setTimeout(function () {
                timer.current = null;
            }, delayTime);
            if (isCallNow)
                fnRef.current.apply(fnRef, args);
            return;
        }
        timer.current = setTimeout(function () {
            fnRef.current.apply(fnRef, args);
        }, delayTime);
    };
    return [run, cancel];
};
exports.default = useDebounce;
