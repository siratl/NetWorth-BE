exports.up = function (knex) {
  return knex.schema.createTable("bills", (tbl) => {
    tbl.increments();

    tbl.string("name", 128).notNullable().unique().index();
    tbl
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .index();
    tbl.integer("amount").notNullable();
    tbl.date("date");
    tbl.boolean("repeat").defaultTo(false);
    tbl.boolean("paid").defaultTo(false);
    tbl.string("message", 255);
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("bills");
};
