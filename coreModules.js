const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");

const myPath = "C:Users/Mushfiq Mashuk/Desktop/NodeJs/index.js";

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path);
console.log(path.parse(myPath));

console.log(os.platform());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.version());
console.log(os.freemem());
console.log(os.cpus()); // returns an array of objects consists of total CPU cores

// This is the synchronous way of file handling (i/o operation)
fs.writeFileSync("file.txt", "nice job bro!");
fs.writeFileSync("file.txt", "Thanks very much!"); // replace previous text in the file.
fs.appendFileSync("file.txt", " Welcome!");
const data = fs.readFileSync("file.txt");
console.log(data); // it will give us Buffer

console.log(data.toString());

// This is the synchronous way of file handling (i/o operation)

fs.readFile("file.txt", (err, data) => {
  console.log(data.toString());
});

console.log("This will print earlier");

// Event module

const event = new EventEmitter();

event.on("fire", (floor) =>
  console.log(`event listener can be created with 'on' method! ${floor}`)
);

event.addListener("fire", (floor) =>
  console.log(`event listener can also be created by this method ${floor}`)
); // this is updated

setTimeout(() => {
  event.emit("fire", "Second floor"); // this will trigger the event
}, 2000);
