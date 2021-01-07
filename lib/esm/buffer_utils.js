var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "fs";
import temp_path from "./temp_path.js";
import * as webp from "./index.js";
function encode_image(filepath, type) {
    let data = fs.readFileSync(filepath);
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
export const base64_to_image = (base64str, path) => {
    let buf = Buffer.from(base64str, 'base64');
    try {
        fs.writeFileSync(path, buf, { flag: "wx" });
    }
    catch (err) {
        throw err;
    }
    return true;
};
export const base64str2webp = (base64str, option, path) => __awaiter(void 0, void 0, void 0, function* () {
    let image_type = base64str.split(';')[0].split('/')[1];
    let base64 = base64str.split(',')[1];
    let filename = String(Math.floor(Math.random() * 10000000000) + 1);
    let input_file_path = `${temp_path()}${filename}.${image_type}`;
    let webp_image_path = `${path}${filename}.webp`;
    let status = base64_to_image(base64, input_file_path);
    if (status) {
        const result = webp.cwebp(input_file_path, webp_image_path, option);
        return result.then(() => {
            let webp_base64str = encode_image(webp_image_path, "base64");
            fs.unlinkSync(input_file_path);
            return webp_base64str;
        }).catch((err) => {
            console.log(err);
        });
    }
    else {
        console.log("Failed");
    }
});
