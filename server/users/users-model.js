const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).first();
}

function add(bill) {
  return db("users").insert(bill);
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("users").where({ id }).del();
}
