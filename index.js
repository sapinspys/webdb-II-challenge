const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

server.get("/api/zoos", (req, res) => {
  db("zoos")
    .then(zoos => {
      res.status(200).json(zoos);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/api/zoos/:id", (req, res) => {
  const { id } = req.params;

  db("zoos")
    .where({ id })
    .first() // allows you to get out of array
    .then(zoo => {
      if (zoo) {
        res.status(200).json(zoo);
      } else {
        res.status(404).json({ message: 'Record not found.'})
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/api/zoos", (req, res) => {
  const newZoo = req.body;

  if (newZoo.name) {
    db("zoos")
      .insert(newZoo)
      .then(id => {
        res.status(201).json(id[0]);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(400).json({ error: "Please provide a name for the zoo." });
  }
});

server.put("/api/zoos/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  if (changes.name) {
    db('zoos')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ message: 'Record not found.'})
      }
    })
    .catch(error => {
      res.status(500).json(error);
    })
  } else {
    res.status(400).json({ error: "Please provide a name for the zoo." });
  }
});

server.delete("/api/zoos/:id", (req, res) => {
  const { id } = req.params;

  db('zoos')
    .where({ id })
    .del()
    .then(count => {
      if (count) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ message: 'Record not found.'})
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
