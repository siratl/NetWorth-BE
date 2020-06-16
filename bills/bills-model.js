const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findBillsByUser,
  add,
  update,
  remove,
};

function find() {
  return db("bills");
}

function findById(id) {
  return db("bills").where({ id }).first();
}

function findBillsByUser(id) {
  return db("bills").where({ user_id: id });
}

function add(bill) {
  return db("bills").insert(bill);
}

function update(id, changes) {
  return db("bills")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("bills").where({ id }).del();
}
