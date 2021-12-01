const fs = require('fs');
const path = require('path');
const http = require('http');

try {
    var page = fs.readFileSync('./1/index.html')
    console.log(page);
 } catch (error) {
     console.log("error" , error);
 }
 
 
 http.createServer((req,res) =>{
res.end(page)
 }
    
 )