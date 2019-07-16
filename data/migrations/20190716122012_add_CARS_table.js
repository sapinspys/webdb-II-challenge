
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('cars', tbl => {
      tbl.increments() //AUTO-INC IDs

      tbl
        .string()
    })
};

exports.down = function(knex) {
  
};
