exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();

    tbl.string("first_name", 128).notNullable();
    tbl.string("last_name", 128).notNullable();
    tbl.string("email", 128).notNullable().unique();
    tbl.string("username", 128).notNullable().index().unique();
    tbl.string("password").notNullable();
    tbl.integer("age");
    tbl.integer("net_worth");
    tbl.string("category", 255);
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
