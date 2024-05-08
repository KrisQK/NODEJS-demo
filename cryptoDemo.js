//hash password
//encrypt data
//decrypt data

import crypto from "crypto";
//createHash
// const hash = crypto.createHash("sha256");
// hash.update("password12345");
// console.log(hash.digest("hex"));
// //randomByptes()
// crypto.randomBytes(16, (err, buf) => {
//   if (err) throw err;
//   console.log(buf.toString("hex")); //console.log(buf.toString("hex"));：将 Buffer 对象中的数据转换为十六进制字符串，然后输出到控制台。
// });
// crypto.createHash("sha256")：这创建了一个哈希对象，使用的是 SHA-256 算法。SHA-256 是一种常用的散列算法，广泛用于生成数据的唯一表示（即哈希值）。
// hash.update("password12345")：这将密码 "password12345" 输入到哈希算法中。update 方法可以被多次调用，以处理较大的数据或多个数据块。
// console.log(hash.digest("hex"))：这将计算最终的哈希值，并以十六进制字符串的形式输出。调用 digest 方法后，哈希对象不能再被用于生成新的哈希值。

// ----
// crypto.randomBytes(16, (err, buf) => {...})：这个方法异步生成一个包含16字节的随机数据。随机字节常用于生成密钥、盐值(salts)或其他需要随机性的场景。
// (err, buf) => {...}：这是一个回调函数，会在随机字节生成后被调用。buf 参数是一个包含生成字节的 Buffer 对象。
// if (err) throw err;：如果在生成随机字节时发生错误，错误会被抛出。
// console.log(buf.toString("hex"));：将 Buffer 对象中的数据转换为十六进制字符串，然后输出到控制台。
//-------
//createCipheriv & createDecipheriv

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("helo, this is a secret message", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
