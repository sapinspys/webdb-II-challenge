const server = require('./server.js');

const port = 3030;

server.listen(port, function () {
  console.log(`\n*** API Running on http://localhost:${port} ***\n`)
})