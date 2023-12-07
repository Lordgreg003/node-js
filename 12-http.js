const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our web page");
  }
  if (req.url === "/about") {
    res.end("here is our short history");
  }
  res.end(
    `<h1>Oops!</h1>
    <p> we cant seem to find the page you are looking for
    <a href='/' > back home </a>`
  );
});

server.listen(4000);
