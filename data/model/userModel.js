const db = require("../dbConfig");

module.exports = {
  getUsers,
  addUser,
  getUserById
};

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users")
    .where("users.id", id)
    .first();
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(([id]) => getUserById(id));
}
