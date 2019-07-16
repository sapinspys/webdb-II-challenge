exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments(); //AUTO-INC IDs

    tbl.integer("VIN").unsigned().notNullable();

    tbl.string("make", 128).notNullable();

    tbl.string("model", 128).notNullable();

    tbl.integer("milage").unsigned().notNullable();

    tbl.string("transmission", 128).nullable();

    tbl.string("title", 128).nullable();
  });
};

exports.down = function(knex) {};
