const http = require("http");
const fs = require("fs");
const port = 2021;

let data = fs.readFileSync("./file.json", "utf-8");

http
  .createServer((req, res) => {
    res.end(data);
  })
  .listen(port);
