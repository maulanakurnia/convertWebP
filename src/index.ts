import * as fs from "fs"
import * as exec from "child_process"
import * as buffer_utils from "./buffer_utils.js";
import mcwebp from "./module/cwebp.js"

export const grant_permission = (): void => {
    const arr = [mcwebp()];
    // @ts-ignore
    arr.forEach(exe_path => { fs.chmodSync(exe_path, 0o755); });
};

/**  
 * @param {string} base64str - base64 of image
 * @param {string} quality - quality of image webp (0 - 100) example : -q 80
 * @param {string} path - path save of webp example : image/
 * 
*/
export const base64str2webp = (base64str: string, quality: string, path: string) => {
    return buffer_utils.base64str2webp(base64str, quality, path)?.then((val) => {
        return val
    })
}

/**  
 * @param {string} input_image - input image example : node.jpeg
 * @param {string} output_image - output image example : node.webp 
 * @param {string} quality - quality of image webp (0 - 100) example : -q 80
 * 
*/
export const cwebp = (input_image: string, output_image: string, quality: string): Promise<string | Buffer> => {
    const query = `${quality} "${input_image}" -o "${output_image}"`;
    return new Promise((resolve) => {
        exec.execFile(`"${mcwebp()}"`, query.split(/\s+/), { shell: true }, (error, stdout: string, stderr: string) => {
            if (error) {
                console.warn(error);
            }
            resolve(stdout ? stdout : stderr);
        });
    });
}