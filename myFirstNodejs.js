const http = require("http");
const dt = require("./myModule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.mydateObject());
    res.end();
  })
  .listen(8080);

http
  .createServer((req, res) => {
    res.write(req.url);
    res.end();
  })
  .listen(8081);

try {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("This is a Header");
      res.end();
    })
    .listen(8082);
} catch (err) {
  console.log(err);
}
