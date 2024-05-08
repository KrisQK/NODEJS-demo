// import fs from "fs";
import fs from "fs/promises";
//ReadFile- callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data);
// });
//ReadFIleSync()- synchronous verion
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

//readFile verson- Promise .then()
// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// readfile() async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

//WriteFile()
const writeFile = async () => {
  try {
    await fs.writeFile(
      "./test.txt",
      "Hello World! i am writing to a file using Node.js"
    );
    console.log("File written successfully!");
  } catch (err) {
    console.error(err);
  }
};
//appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile(
      "./test.txt",
      "\nThis is an appended text to the file."
    );
    console.log("File appended successfully!");
  } catch (err) {
    console.error(err);
  }
};
writeFile();
appendFile();
readFile();
