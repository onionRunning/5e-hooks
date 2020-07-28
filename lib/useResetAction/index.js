"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useResetAction = function (fn) {
    react_1.useEffect(function () {
        return function () {
            fn();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
exports.default = useResetAction;
// 离开页面时触发的hook - eg: 清空页面的数据
