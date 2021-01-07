"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function TempFiles() {
    if (process.platform === 'darwin') {
        return path_1.default.join(process.cwd(), "/src/temp/");
    }
    else if (process.platform === 'linux') {
        return path_1.default.join(process.cwd(), "/src/temp/");
    }
    else if (process.platform === 'win32') {
        if (process.arch === 'x64') {
            return path_1.default.join(process.cwd(), "\\src\\temp\\");
        }
        else {
            console.log('Unsupported platform:', process.platform, process.arch);
        }
    }
    else {
        console.log('Unsupported platform:', process.platform, process.arch);
    }
}
exports.default = TempFiles;
