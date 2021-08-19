const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    const readStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'UTF-8');

    readStream.pipe(res);
});

////// req is a readable stream, res is writable stream //////

server.listen(8080);