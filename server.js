const http = require("http");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Declare port for server
// process.env.PORT = 3000;
// const port = process.env.PORT;

// Decalred with environmental variables to save certain data
const port = process.env.PORT;

// Create Server
const server = http.createServer((req, res) => {
  // Write the response
  if (req.url === "/" || req.url === "index.html") {
    const filePath = path.join(__dirname, "/index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
