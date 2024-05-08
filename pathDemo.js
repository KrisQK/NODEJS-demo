import path from "path";

import url from "url";
const filePath = "./dir1/dir2/test.txt";

//basename
console.log(path.basename(filePath));
//dirname
console.log(path.dirname(filePath));
//extname
console.log(path.extname(filePath));
//parse
console.log(path.parse(filePath));
//__dirname
const __dirname = url.fileURLToPath(import.meta.url);
console.log(import.meta.url);
console.log(__dirname);
// __filename;
const __filename = path.dirname(__dirname);
console.log(__filename);
// join 根据os 制定 路径分隔符
const filepath2 = path.join(__filename, "dir1", "dir2", "test.txt");
console.log(filepath2);

//resolve()
const filepath3 = path.resolve(__filename, "dir1", "dir2", "test.txt");
console.log(filepath3);
