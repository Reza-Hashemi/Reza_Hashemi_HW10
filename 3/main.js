const http = require("http");
const fs = require("fs");
const port = 2021;

http
  .createServer((req, res) => {
    res.end(console.log(req.url));
  })
  .listen(port);
