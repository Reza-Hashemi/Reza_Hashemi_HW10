const http = require("http");
const port = 2021;
http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("Hello Web Application");
    } else if (req.url === "/aboute") {
      res.end("Aboute Me");
    } else if (req.url === "/product") {
      res.end("Production");
    } else if (req.url === "/contact") {
      res.end("Contact Us");
    } else res.end("Page Not Found");
  })
  .listen(port);
