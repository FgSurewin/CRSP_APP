"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
var image_1 = __importDefault(require("../database/models/image"));
var logger_1 = require("../config/logger");
var ImageService = (function () {
    function ImageService() {
    }
    ImageService.prototype.getAllImages = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var res, result, e_1, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = ctx.res;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, image_1.default.find()];
                    case 2:
                        result = _a.sent();
                        res.json({
                            code: 0,
                            message: "Get all images",
                            data: result,
                        });
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        error = new Error(e_1);
                        res.json({
                            code: 5000,
                            message: error.message,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    ImageService.prototype.getImageByPano = function (ctx, panoId) {
        return __awaiter(this, void 0, void 0, function () {
            var res, result, e_2, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = ctx.res;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, image_1.default.find({ pano: panoId })];
                    case 2:
                        result = _a.sent();
                        if (result.length > 0) {
                            res.json({
                                code: 0,
                                message: "Get images by panorama id",
                                data: result,
                            });
                        }
                        else {
                            res.json({
                                code: 2000,
                                message: "Result is NULL",
                                data: null,
                            });
                        }
                        return [3, 4];
                    case 3:
                        e_2 = _a.sent();
                        error = new Error(e_2);
                        res.json({
                            code: 5000,
                            message: error.message,
                        });
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    ImageService.prototype.getImageById = function (ctx, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res, result, e_3, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = ctx.res;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4, image_1.default.findOne({
                                _id: id,
                            })];
                    case 2:
                        result = _a.sent();
                        if (!result) return [3, 4];
                        return [4, this.trigger(true, result._id)];
                    case 3:
                        _a.sent();
                        res.json({
                            code: 0,
                            message: "Get one image by _id",
                            data: result,
                        });
                        return [3, 5];
                    case 4:
                        res.json({
                            code: 2000,
                            message: "Result is NULL",
                            data: result,
                        });
                        _a.label = 5;
                    case 5: return [3, 7];
                    case 6:
                        e_3 = _a.sent();
                        error = new Error(e_3);
                        res.json({
                            code: 5000,
                            message: error.message,
                        });
                        return [3, 7];
                    case 7: return [2];
                }
            });
        });
    };
    ImageService.prototype.getRandomImageList = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var res, collections, random, pano, result, e_4, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = ctx.res;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4, image_1.default.find({
                                isLabeled: false,
                                count: { $lt: 3 },
                            })];
                    case 2:
                        collections = _a.sent();
                        if (!(collections.length === 0)) return [3, 3];
                        res.json({
                            code: 2000,
                            message: "Result is NULL",
                            data: null,
                        });
                        return [3, 5];
                    case 3:
                        random = Math.floor(Math.random() * collections.length);
                        console.log(logger_1.Red("Length") + " -> " + collections.length);
                        pano = collections[random].pano;
                        return [4, image_1.default.find({ pano: pano })];
                    case 4:
                        result = _a.sent();
                        res.json({
                            code: 0,
                            message: "Get images randomly",
                            data: result,
                        });
                        _a.label = 5;
                    case 5: return [3, 7];
                    case 6:
                        e_4 = _a.sent();
                        error = new Error(e_4);
                        res.json({
                            code: 5000,
                            message: error.message,
                        });
                        return [3, 7];
                    case 7: return [2];
                }
            });
        });
    };
    ImageService.prototype.trigger = function (labeled, id) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_5, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, image_1.default.updateOne({ _id: id }, { isLabeled: labeled })];
                    case 2:
                        _a.sent();
                        result = true;
                        return [3, 4];
                    case 3:
                        e_5 = _a.sent();
                        error = new Error(e_5);
                        console.log(logger_1.Red(error.message));
                        return [3, 4];
                    case 4: return [2, result];
                }
            });
        });
    };
    ImageService.prototype.toggle = function (ctx, labeled, id) {
        return __awaiter(this, void 0, void 0, function () {
            var res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = ctx.res;
                        console.log("Here@@@@@@@@");
                        return [4, this.trigger(labeled, id)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            console.log(logger_1.Red("success!!!!!"));
                            res.json({
                                code: 0,
                                message: "Toggle Successfully",
                            });
                        }
                        else {
                            console.log(logger_1.Red("Failed!!!!!"));
                            res.json({
                                code: 5000,
                                message: "Toggle Failed - Invalid ID",
                            });
                        }
                        return [2];
                }
            });
        });
    };
    ImageService.prototype.addLabelArea = function (ctx, labels, id, field, count) {
        return __awaiter(this, void 0, void 0, function () {
            var res, ok, result, e_6, error;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        res = ctx.res;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4, image_1.default.updateOne({ _id: id }, (_a = {}, _a[field] = labels, _a.count = count, _a))];
                    case 2:
                        ok = (_b.sent()).ok;
                        return [4, image_1.default.findOne({ _id: id })];
                    case 3:
                        result = _b.sent();
                        if (ok === 1) {
                            res.json({
                                code: 0,
                                message: "Add Successfully",
                                data: result,
                            });
                        }
                        else {
                            res.json({
                                code: 4000,
                                message: "Field name is invalid",
                            });
                        }
                        return [3, 5];
                    case 4:
                        e_6 = _b.sent();
                        error = new Error(e_6);
                        res.json({
                            code: 5000,
                            message: error.message,
                        });
                        return [3, 5];
                    case 5: return [2];
                }
            });
        });
    };
    return ImageService;
}());
exports.ImageService = ImageService;
