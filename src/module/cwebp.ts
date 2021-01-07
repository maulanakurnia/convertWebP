import path from "path"

export default function module_enwebp() {
  if (process.platform === 'darwin') {
    return path.join(process.cwd(), "/bin/libwebp_osx/bin/cwebp");
  } else if (process.platform === 'linux') {
    return path.join(process.cwd(), "/bin/libwebp_linux/bin/cwebp");
  } else if (process.platform === 'win32') {
    if (process.arch === 'x64') {
      return path.join(process.cwd(), "\\bin\\libwebp_win64\\bin\\cwebp.exe");
    } else {
      console.log('Unsupported platform:', process.platform, process.arch);
    }
  } else {
    console.log('Unsupported platform:', process.platform, process.arch);
  }
};