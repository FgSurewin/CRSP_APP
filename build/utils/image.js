"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getField = void 0;
var getField = function (count) {
    var result = "user_one";
    switch (count) {
        case 1:
            result = "user_one";
            break;
        case 2:
            result = "user_two";
            break;
        case 3:
            result = "user_three";
            break;
        default:
            break;
    }
    return result;
};
exports.getField = getField;
