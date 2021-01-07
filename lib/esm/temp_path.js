import path from "path";
export default function TempFiles() {
    if (process.platform === 'darwin') {
        return path.join(process.cwd(), "/src/temp/");
    }
    else if (process.platform === 'linux') {
        return path.join(process.cwd(), "/src/temp/");
    }
    else if (process.platform === 'win32') {
        if (process.arch === 'x64') {
            return path.join(process.cwd(), "\\src\\temp\\");
        }
        else {
            console.log('Unsupported platform:', process.platform, process.arch);
        }
    }
    else {
        console.log('Unsupported platform:', process.platform, process.arch);
    }
}
