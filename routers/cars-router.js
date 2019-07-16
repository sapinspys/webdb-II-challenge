const express = require('express');

// Knex configuration
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const router = express.Router();

router.post("/", (req, res) => {
  const newVehicle = req.body;

  if (newVehicle['VIN'] && newVehicle.make && newVehicle.model && newVehicle.milage) {
    db('cars')
      .insert(newVehicle)
      .then(test => {
        res.status(201).json(test)
      })
      .catch(error => {
        res.status(500).json(error)
      })
  } else {
    res.status(400).json({ error: "Vehicle VIN, make, model, and milage are required fields."})
  }
})

router.get("/", (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(error => {
      res.status(500).json(error)
    })
}) 

module.exports = router;