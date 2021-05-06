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
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var image_1 = __importDefault(require("./routes/image"));
var mongoose_1 = __importDefault(require("mongoose"));
var nunjucks_1 = __importDefault(require("nunjucks"));
var logger_1 = require("./config/logger");
var database_1 = require("./database");
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var app, PORT, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = express_1.default();
                    PORT = process.env.PORT || 8080;
                    app.use(express_1.default.static("./public"));
                    nunjucks_1.default.configure("views", {
                        autoescape: true,
                        express: app,
                    });
                    dotenv_1.default.config();
                    app.use(logger_1.loggerMiddleware);
                    app.use(body_parser_1.default.json());
                    app.use(body_parser_1.default.urlencoded({ extended: false }));
                    app.use("/api/image", image_1.default);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, mongoose_1.default.connect(database_1.config.link, database_1.config.options)];
                case 2:
                    _a.sent();
                    logger_1.logger("DATABASE", "Connect to the MongoDB successfully!");
                    return [3, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(new Error(error_1));
                    return [3, 4];
                case 4:
                    app.use(function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, next()];
                                case 1:
                                    _a.sent();
                                    res.render("index.html");
                                    return [2];
                            }
                        });
                    }); });
                    app.listen(PORT, function () {
                        return logger_1.logger("SERVER", "Server is running on http://localhost:" + PORT);
                    });
                    return [2];
            }
        });
    });
})();
