/// <reference types="node" />
/**
 * @description this will grant 755 permission to webp executables
 */
export declare const grant_permission: () => void;
/**
 * @param {string} base64str - base64 of image
 * @param {string} quality - quality of image webp (0 - 100) example : -q 80
 * @param {string} path - path save of webp example : image/
 *
*/
export declare const base64str2webp: (base64str: string, quality: string, path: string) => Promise<string | void | Buffer>;
export declare const cwebp: (input_image: string, output_image: string, option: string) => Promise<string | Buffer>;
