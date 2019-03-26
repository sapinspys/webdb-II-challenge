const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

server.get('/api/zoos', (req, res) => {
  // get the zoos from the database
  db('zoos')
  .then(zoos => {
    res.status(200).json(zoos);
  })
  .catch(errpr => {
    res.status(500).json(error);
  })
});

server.get('/:id', (req, res) => {
  // retrieve a role by id
  res.send('Write code to retrieve a role by id');
});

server.post('/', (req, res) => {
  // add a role to the database
  res.send('Write code to add a role');
});

server.put('/:id', (req, res) => {
  // update roles
  res.send('Write code to modify a role');
});

server.delete('/:id', (req, res) => {
  // remove roles (inactivate the role)
  res.send('Write code to remove a role');
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
