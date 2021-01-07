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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64str2webp = exports.base64_to_image = void 0;
const fs_1 = __importDefault(require("fs"));
const temp_path_js_1 = __importDefault(require("./temp_path.js"));
const webp = __importStar(require("./index.js"));
function encode_image(filepath, type) {
    let data = fs_1.default.readFileSync(filepath);
    let buf = Buffer.from(data);
    if (type == "base64") {
        let base64 = buf.toString('base64');
        return base64;
    }
    else {
        return buf;
    }
}
// Convert base64 to Image
const base64_to_image = (base64str, path) => {
    let buf = Buffer.from(base64str, 'base64');
    try {
        fs_1.default.writeFileSync(path, buf, { flag: "wx" });
    }
    catch (err) {
        throw err;
    }
    return true;
};
exports.base64_to_image = base64_to_image;
const base64str2webp = (base64str, option, path) => __awaiter(void 0, void 0, void 0, function* () {
    let image_type = base64str.split(';')[0].split('/')[1];
    let base64 = base64str.split(',')[1];
    let filename = String(Math.floor(Math.random() * 10000000000) + 1);
    let input_file_path = `${temp_path_js_1.default()}${filename}.${image_type}`;
    let webp_image_path = `${path}${filename}.webp`;
    let status = exports.base64_to_image(base64, input_file_path);
    if (status) {
        const result = webp.cwebp(input_file_path, webp_image_path, option);
        return result.then(() => {
            let webp_base64str = encode_image(webp_image_path, "base64");
            fs_1.default.unlinkSync(input_file_path);
            return webp_base64str;
        }).catch((err) => {
            console.log(err);
        });
    }
    else {
        console.log("Failed");
    }
});
exports.base64str2webp = base64str2webp;
