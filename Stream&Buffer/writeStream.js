const http = require("http");
const fs = require("fs");

const readStream = fs.createReadStream(`${__dirname}/bigData.txt`, "UTF-8");
const writeStream = fs.createWriteStream(`${__dirname}/output.txt`); // Writting in this file in Streaming way

readStream.addListener("data", (chunk) => {
  writeStream.write(chunk);
});

// readStream.pipe(writeStream); // This will also work by using 'pipe' method

// function myPipe(writeStream) { // pipe is similar to this
//   readStream.addListener("data", (chunk) => {
//     writeStream.write(chunk);
//   });
// }

// myPipe(writeStream);