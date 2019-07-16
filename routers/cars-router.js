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
      .then(id => {
        res.status(201).json(id)
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

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db('cars')
    .where({ id })
    .update(changes)
    .then(carsUpdated => {
      if(carsUpdated) {
        res.status(200).json({ message: "Vehicle information updated.", carsUpdated});
      } else {
        res.status(404).json({ error: 'Vehicle ID not found.'})
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.delete("/:id", (req,res) => {
  const { id } = req.params;

  db('cars')
    .where({ id })
    .del()
    .then(carsDeleted => {
      if(carsDeleted) {
        res.status(200).json({ message: "Vehicle entry was deleted.", carsDeleted});
      } else {
        res.status(404).json({ error: 'Vehicle ID not found.'})
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router;