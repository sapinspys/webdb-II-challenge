const express = require("express");

const carsRouter = require("./routers/cars-router.js");

const helmet = require("helmet");

const server = express();

server.use(express.json()); // Allows for JSON
server.use(helmet());

// Logger Middleware
server.use(function(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);

  next();
});

// Welcome Endpoint
server.get("/", (req, res) => {
  res.send(`Welcome to Web DB Challenge II. Use /api/cars to GET and POST vehicles.`);
});

server.use("/api/cars", carsRouter);

// Route Does Not Exist Middleware
server.use(function(req, res) {
  res
    .status(404)
    .send("This route does not exist. Use '/api/cars'.");
});

module.exports = server;