const db = require("../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .where({ id })
    .select("id", "first_name", "last_name", "username", "email")
    .first();
}

async function add(bill) {
  const [id] = await db("users").insert(bill);

  return findById(id);
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
