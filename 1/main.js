const http = require("http");
const port = 2021;

http
  .createServer((req, res) => {
    res.end("hello world");
  })
  .listen(port);
