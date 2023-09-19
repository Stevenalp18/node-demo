// var url = "https://mylogger.io/log";

// function log(message) {
//   //Send HTTP request
//   console.log(message);
// }

// module.exports.log = log;
// module.exports.endPoint = url;

// Special Variables?
// console.log(__filename);
// console.log(__dirname);

// const path = require("path");
// var pathObj = path.parse(__filename);

// Operating System
// const os = require("os");
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}\nFree Memory: ${freeMemory}`);

// File System
// const fs = require("fs");

// var files = fs.readdir("./", (err, files) => {
//   if (err) {
//     console.log("Error: ", err);
//   } else {
//     console.log("Result: ", files);
//   }
// });
// console.log(files);

// Making a noise, making an event
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// // Register a listener
// emitter.on("messageLogged", (arg) => {
//   //arg, e, eventarg, event
//   console.log("Listener Called", arg);
// });

// // Raise an event
// emitter.emit("messageLogged", { id: 1, url: "http://" });

// // Raise: logging (data: message)

// emitter.on("logging", (e) => {
//   console.log("Logging Called", e);
// });

// emitter.emit("logging", { data: "message" });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello World");
//     res.end();
//   }
//   if (req.url === "/api/courses") {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });

// server.listen(3000);

// console.log("Listening on port 3000...");
