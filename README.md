[![webp-converter Logo](images/nlogo.gif)](https://www.npmjs.com/package/webp-converter)

> This is an hard fork of [webp-converter v2.3.1](https://www.npmjs.com/package/webp-converter)

A small [node.js](http://nodejs.org) library for converting any image to webp file format or converting webp image to any image file format.


This library uses precompiled executables of WebP for more info visit [WebP](https://developers.google.com/speed/webp)

For converting other image formats to webp, please read this documentation  [cwebp Encoder](https://developers.google.com/speed/webp/docs/cwebp)

For converting webp image to other image format, please read this documentation  [dwebp Encoder](https://developers.google.com/speed/webp/docs/dwebp)

For converting gif image to webp, please read this documentation [gif2webp Converter](https://developers.google.com/speed/webp/docs/gif2webp)

For creating animated webp image using webp images, please read this documentation [webpmux Muxer](https://developers.google.com/speed/webp/docs/webpmux)


## What's New 
* Multiple input files issue fixed for webpmux_animate
* Repeated temp file names issue fixed for Base64 and Buffer conversion

# How to use

## Fix Permission Issue

```ts

import webp from "webp-converter";

// this will grant 755 permission to webp executables
webp.grant_permission();

```

# cwebp

## Convert other image format to webp

```ts

import webp from "webp-converter";

// pass input image(.jpeg,.png .....) path ,output image(give path where to save and image file name with .webp extension)
// pass option(read  documentation for options)

// cwebp(input,output,option)

const result = webp.cwebp("nodejs_logo.jpg","nodejs_logo.webp","-q 80");
result.then((response) => {
	console.log(response);
});


```

## Convert base64 image to webP image

```ts

import webp from "webp-converter";

webp.base64str2webp(base64,format,"-q 80","/images");

```

## Installation

```bash
$ npm install @mufradmabni/webp-converter
```

## License

  [MIT](LICENSE)