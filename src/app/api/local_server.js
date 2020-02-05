const http = require(`http`);
const fs = require(`fs`);
const hostname = `127.0.0.1`;
const port = 9999;

const server = http.createServer( (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Content-Type', 'json/plain');
  res.statusCode = 200;

  console.log(`request url : ` + req.url);

  if(req.url === `/destination`) {
    fs.readFile(`./json/destination.json`, `utf8`, (err, data) => {
      res.end(JSON.stringify(JSON.parse(data)));
    });
  }else if(req.url === `/outdoor`) {
    fs.readFile(`./json/outdoor.json`, `utf8`, (err, data) => {
      res.end(JSON.stringify(JSON.parse(data)));
    });
  }else if(req.url === `/calendar`) {
    fs.readFile(`./json/calendar.json`, `utf8`, (err, data) => {
      res.end(JSON.stringify(JSON.parse(data)));
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
