const fs = require("fs");
const http = require("http");
const port = 2021;
try {
   var page = fs.readFileSync('./index.html','utf-8')
   console.log(page);
} catch (error) {
    console.log("error" , error);
}


http.createServer((req, res) => {
  res.end(page)
}).listen(port);
