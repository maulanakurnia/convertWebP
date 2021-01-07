import fs from "fs"
import temp_path from "./temp_path.js";
import * as webp from "./index.js";

function encode_image(filepath: string | number | Buffer | URL, type: string) {
  let data: Buffer = fs.readFileSync(filepath);
  let buf: Buffer = Buffer.from(data);
  if (type == "base64") {
    let base64 = buf.toString('base64');
    return base64;
  } else {
    return buf
  }
}

// Convert base64 to Image
export const base64_to_image = (base64str: string, path: string) => {
  let buf: Buffer = Buffer.from(base64str, 'base64');
  try {
    fs.writeFileSync(path, buf, { flag: "wx" })
  } catch (err) {
    throw err
  }
  return true;
}


export const base64str2webp = async (base64str: string, option: string, path: string) => {
  let image_type = base64str.split(';')[0].split('/')[1];
  let base64 = base64str.split(',')[1];
  let filename: string = String(Math.floor(Math.random() * 10000000000) + 1)
  let input_file_path: string = `${temp_path()}${filename}.${image_type}`;
  let webp_image_path: string = `${path}${filename}.webp`;
  let status: boolean = base64_to_image(base64, input_file_path)

  if (status) {
    const result = webp.cwebp(input_file_path, webp_image_path, option);

    return result.then(() => {
      let webp_base64str = encode_image(webp_image_path, "base64")
      fs.unlinkSync(input_file_path);
      return webp_base64str
    }).catch((err) => {
      console.log(err)
    })
  } else {
    console.log("Failed")
  }
}