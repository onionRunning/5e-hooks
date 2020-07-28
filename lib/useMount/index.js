"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useMount = function (fn) {
    react_1.useEffect(function () {
        fn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
// 过滤副作用
exports.default = useMount;
