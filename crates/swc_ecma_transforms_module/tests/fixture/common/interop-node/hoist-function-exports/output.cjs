"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isOdd: null,
    nextOdd: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get isOdd () {
        return isOdd;
    },
    get nextOdd () {
        return nextOdd;
    }
});
const _evens = require("./evens");
function nextOdd(n) {
    return (0, _evens.isEven)(n) ? n + 1 : n + 2;
}
var isOdd = function(isEven) {
    return function(n) {
        return !isEven(n);
    };
}(_evens.isEven);
