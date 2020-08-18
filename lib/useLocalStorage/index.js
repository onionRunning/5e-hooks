"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useLocalStorage = function (key) {
    var getStorageValue = function () {
        try {
            var storageValue = localStorage.getItem(key);
            return storageValue ? JSON.parse(storageValue) : '';
        }
        catch (err) {
            console.warn("useLocalStorage \u65E0\u6CD5\u83B7\u53D6" + key + ": ", err);
        }
        return '';
    };
    var _a = react_1.useState(getStorageValue), value = _a[0], setValue = _a[1];
    // 更新组件状态并保存到Storage
    var save = react_1.useCallback(function (v) {
        setValue(function () {
            localStorage.setItem(key, JSON.stringify(v));
            return v;
        });
    }, [key]);
    return [value, save];
};
exports.default = useLocalStorage;
