/// <reference types="node" />
export declare const base64_to_image: (base64str: string, path: string) => boolean;
export declare const base64str2webp: (base64str: string, option: string, path: string) => Promise<string | void | Buffer>;
