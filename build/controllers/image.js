"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.ImageController = void 0;
var logger_1 = require("../config/logger");
var image_1 = __importDefault(require("../database/models/image"));
var image_2 = require("../services/image");
var image_3 = require("../utils/image");
var NAMESPACE = "IMAGE ROUTE";
var imageService = new image_2.ImageService();
var ImageController = (function () {
    function ImageController() {
    }
    ImageController.prototype.getAllImages = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, imageService.getAllImages({ req: req, res: res, next: next })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ImageController.prototype.getImageByPano = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var panoId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        panoId = req.params.panoId;
                        if (!panoId) return [3, 2];
                        return [4, imageService.getImageByPano({ req: req, res: res, next: next }, panoId)];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        res.json({
                            code: 6000,
                            message: "params is invalid.",
                        });
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ImageController.prototype.getImageById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var Id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Id = req.params.Id;
                        if (!Id) return [3, 2];
                        return [4, imageService.getImageById({ req: req, res: res, next: next }, Id)];
                    case 1:
                        _a.sent();
                        return [3, 3];
                    case 2:
                        res.json({
                            code: 6000,
                            message: "params is invalid.",
                        });
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ImageController.prototype.getRandomImageList = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, imageService.getRandomImageList({ req: req, res: res, next: next })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ImageController.prototype.toggle = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, labeled, id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, labeled = _a.labeled, id = _a.id;
                        if (!id) return [3, 2];
                        console.log("Here@@@@@@@@");
                        return [4, imageService.toggle({ req: req, res: res, next: next }, labeled, id)];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        res.json({
                            code: 6000,
                            message: "Post body is invalid.",
                        });
                        _b.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ImageController.prototype.addLabelArea = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, labelArea, id, result, newCount, newField;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, labelArea = _a.labelArea, id = _a.id;
                        return [4, image_1.default.findById({
                                _id: id,
                            })];
                    case 1:
                        result = _b.sent();
                        if (!result) return [3, 5];
                        if (!(labelArea && id && result.count < 3)) return [3, 3];
                        console.log("labeled -> ", logger_1.Red(id));
                        newCount = result.count + 1;
                        newField = image_3.getField(newCount);
                        return [4, imageService.addLabelArea({ req: req, res: res, next: next }, labelArea, id, newField, newCount)];
                    case 2:
                        _b.sent();
                        return [3, 4];
                    case 3:
                        console.log("Failed -> ", logger_1.Red(id));
                        res.json({
                            code: 6000,
                            message: "Post body is invalid OR count is larger than 3.",
                        });
                        _b.label = 4;
                    case 4: return [3, 6];
                    case 5:
                        res.json({
                            code: "6000",
                            message: "Image ID is invalid.",
                        });
                        _b.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    ImageController.prototype.test = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(logger_1.Red("TEST ROUTE"));
                res.json({
                    message: "Hello Test",
                });
                return [2];
            });
        });
    };
    __decorate([
        logger_1.log(NAMESPACE)
    ], ImageController.prototype, "getAllImages", null);
    __decorate([
        logger_1.log(NAMESPACE)
    ], ImageController.prototype, "getImageByPano", null);
    __decorate([
        logger_1.log(NAMESPACE)
    ], ImageController.prototype, "getImageById", null);
    __decorate([
        logger_1.log(NAMESPACE)
    ], ImageController.prototype, "getRandomImageList", null);
    __decorate([
        logger_1.log(NAMESPACE)
    ], ImageController.prototype, "toggle", null);
    __decorate([
        logger_1.log(NAMESPACE)
    ], ImageController.prototype, "addLabelArea", null);
    __decorate([
        logger_1.log(NAMESPACE)
    ], ImageController.prototype, "test", null);
    return ImageController;
}());
exports.ImageController = ImageController;
