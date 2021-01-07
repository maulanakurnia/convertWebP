"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function module_enwebp() {
    if (process.platform === 'darwin') {
        return path_1.default.join(process.cwd(), "/bin/libwebp_osx/bin/cwebp");
    }
    else if (process.platform === 'linux') {
        return path_1.default.join(process.cwd(), "/bin/libwebp_linux/bin/cwebp");
    }
    else if (process.platform === 'win32') {
        if (process.arch === 'x64') {
            return path_1.default.join(process.cwd(), "\\bin\\libwebp_win64\\bin\\cwebp.exe");
        }
        else {
            console.log('Unsupported platform:', process.platform, process.arch);
        }
    }
    else {
        console.log('Unsupported platform:', process.platform, process.arch);
    }
}
exports.default = module_enwebp;
;
