const fs = require("fs");
const http = require("http");

const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
//const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8'); // this will give us the encoded version of Buffers i.e the actual data (string)

myReadStream.addListener("data", (chunk) => {
  console.log(chunk);
});

///// Showing that server requests are also be done by Streaming; or through Buffer

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      "<html><head><title>Form</title></head><body><form method='post' action='/info'>Form <input name='message'/></form></body></html>"
    );
    res.end();
  } else if (req.url === "/info" && req.method === "POST") {

    const fullData = [];
    
    req.addListener("data", (chunk) => {
      //console.log(chunk.toString());
      fullData.push(chunk); // we push all the Buffers in an Array
      //console.log(fullData);
    });

    req.addListener("end", () => {
      // This 'end' event is to know when the data tranmission is ended

      console.log("Stream Finished");
      const parsedBuffer = Buffer.concat(fullData);
      console.log(parsedBuffer.toString()); // we concat all the Buffers in a single Buffer when the streaming is finished

      res.write("Thanks for Submitting!");
      res.end();
    });

    // res.write("Check the console");
    // res.end();
  } else {
    res.write("Server Not found!");
    res.end();
  }
});

server.listen(2000);
