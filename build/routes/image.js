"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_1 = require("../controllers/image");
var route = express_1.default.Router();
var imageController = new image_1.ImageController();
route.get("/test", imageController.test);
route.get("/getAll", imageController.getAllImages);
route.get("/getRanList", imageController.getRandomImageList);
route.get("/getImagesByPano/:panoId", imageController.getImageByPano);
route.get("/getOneById/:Id", imageController.getImageById);
route.post("/toggle", imageController.toggle);
route.post("/addLabelArea", imageController.addLabelArea);
exports.default = route;
