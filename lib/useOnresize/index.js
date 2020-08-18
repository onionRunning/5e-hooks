"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var useDebounce_1 = tslib_1.__importDefault(require("../useDebounce"));
var useOnResize = function (delayTime) {
    var _a = react_1.useState(0), clientWidth = _a[0], setClientWidth = _a[1];
    var runResize = useDebounce_1.default(function () { return setClientWidth(document.documentElement.clientWidth); }, {
        delayTime: delayTime || 500,
    })[0];
    var onResize = react_1.useCallback(function () {
        runResize();
    }, [runResize]);
    react_1.useEffect(function () {
        setClientWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', onResize);
        return function () {
            window.removeEventListener('resize', onResize);
        };
    }, [onResize]);
    return clientWidth;
};
exports.default = useOnResize;
