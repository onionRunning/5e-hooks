"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useSessionStorage = function (key) {
    var getStorageValue = function () {
        try {
            var storageValue = sessionStorage.getItem(key);
            return storageValue ? JSON.parse(storageValue) : '';
        }
        catch (err) {
            console.warn("useSessionStorage \u65E0\u6CD5\u83B7\u53D6" + key + ": ", err);
        }
        return '';
    };
    var _a = react_1.useState(getStorageValue), value = _a[0], setValue = _a[1];
    // 更新组件状态并保存到Storage
    var save = react_1.useCallback(function (v) {
        setValue(function () {
            sessionStorage.setItem(key, JSON.stringify(v));
            return v;
        });
    }, [key]);
    console.error(value, 'valie');
    return [value, save];
};
exports.default = useSessionStorage;
