const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write("Welcome to home page ");
        res.write("I can call write method multiple times");
        res.end();
    }
    else if(req.url === '/about'){
        res.write("This is about page");
        res.end();
    }
    else{
        res.write("Server Not found!");
        res.end();
    }
});

console.log(server);
console.log(http.Server);

server.on("connection", ()=>console.log("server listened at port 3000!")); // listening to connection event

server.listen(3000);