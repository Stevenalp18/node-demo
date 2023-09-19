// Import http module
const http = require("http");

// Declare port for server
const port = 3000;

// Create Server
const server = http.createServer((req, res) => {
  // Write the response
  res.write("This is the response from the server");
  res.end();
});

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
