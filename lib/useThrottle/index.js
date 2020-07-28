"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useThrottle = function (fn, options) {
    var delayTime = options.delayTime || 0;
    var previous = react_1.useRef(0);
    var fnRef = react_1.useRef(fn);
    var run = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = Date.now();
        if (now - previous.current > delayTime) {
            fnRef.current.apply(fnRef, args);
            previous.current = now;
        }
    };
    return [run];
};
exports.default = useThrottle;
// ns 内只触发一次
