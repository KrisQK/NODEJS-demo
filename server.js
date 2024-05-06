import http from "http";
const PORT = process.env.PORT || 3000;
import fs from "fs/promises";
import url from "url";
import path from "path";
//get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
// __filename
// __dirname can not use directly
const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end(`<h1>HomePage </h1>`);
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");

        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end(`<h1>About </h1>`);
      } else {
        throw new Error("not found");
        // res.writeHead(404, { "Content-Type": "text/html" });
        // res.end(`<h1>Not Found </h1>`);
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("method not allowed");
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(`Server Error `);
  }

  // console.log(req.url);
  // console.log(req.method);
  //   res.write("hello world");
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;
  //   res.end(JSON.stringify({ message: "server error" }));
});
// appendFile.post("./users", () => {});
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
