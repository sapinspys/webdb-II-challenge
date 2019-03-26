const express = require("express");

const zoosRouter = require("./routers/zoos-router.js");
const postsRouter = require("./routers/bears-router.js")

const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

server.use("/api/zoos", zoosRouter)

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
