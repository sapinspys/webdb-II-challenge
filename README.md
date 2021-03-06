# Web DB II Module Challenge

In this challenge, you will write an API that can be used to manage _Cars_ stored in a Relational Database.

## Minimum Viable Product

- Using `knex migrations`, design and write a schema for the `cars` table using the specifications below.
- Configure `knex` to connect to a `/data/car-dealer.db3` database using the `sqlite3` npm module. 
- Write a set of endpoints to support `CREATE` and `READ` operations on the `cars` resource. 
- Use a rest client like _Insomnia_ or _Postman_ to test your API.

## Project Set Up

Database and Migrations

1. `npm install` to install nodemon
2. `npm i knex sqlite3`
3. `knex init` creates a knexfile.js
4. Configure knexfile.js connection to `/data/car-dealer.db3`
5. Add `useNullAsDefault: true` to knexfile.js
6. `knex migrate:make add_CARS_table`
7. Populate cars migration file according to specifications
8. `knex migrate:latest`
9. `knex migrate:up` to run next migration
10. `knex migrate:down` to undo last run migration

Server

1. `npm i express helmet`
2. Create and populate index.js file
3. Create and populate server.js file
4. Create and populate router file(s)

Seeds

1. `knex seed:make 001-cars`
2. Add truncate method per Luis' instructions
3. `knex seed:run`

## Specifications

The client for this API is a car dealer who has provided the following specs:

- The critical information for each car is the VIN, make, model, and mileage. 
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known. 

## Stretch Problems

- Add seed data to the database using `knex seeds`
- Add `UPDATE` and `DELETE` operations to your API.
- Write a schema file for a `sales` table. This table should track information on the sale of each car. You may wish to research `foreign keys` in order to link each sale to the entry in `cars` which sold. 
