"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var ImageModel = new mongoose_1.Schema({
    image_id: {
        type: String,
        required: true,
    },
    pano: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    lon: {
        type: Number,
        required: true,
    },
    create_at: {
        type: String,
        required: false,
    },
    image_size: {
        type: [Number],
        required: true,
    },
    isLabeled: {
        type: Boolean,
        required: true,
    },
    count: {
        type: Number,
        require: true,
    },
    labeled_area: {
        type: [
            {
                label_id: String,
                box: [Number],
                label: Number,
                create_at: String,
                score: Number,
            },
        ],
        required: true,
    },
    user_one: {
        type: [
            {
                label_id: String,
                box: [Number],
                label: Number,
                create_at: String,
                score: Number,
            },
        ],
        required: false,
    },
    user_two: {
        type: [
            {
                label_id: String,
                box: [Number],
                label: Number,
                create_at: String,
                score: Number,
            },
        ],
        required: false,
    },
    user_three: {
        type: [
            {
                label_id: String,
                box: [Number],
                label: Number,
                create_at: String,
                score: Number,
            },
        ],
        required: false,
    },
});
exports.default = mongoose_1.default.model("Image", ImageModel, "panorama");
