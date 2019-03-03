const db = require("../dbConfig");

module.exports = {
  getUsers,
  addUser,
  getUserById,
  findUserByName
};

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users")
    .where("users.id", id)
    .first();
}

function findUserByName(username) {
  return db("users")
    .where("users.username", username)
    .first();
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(([id]) => getUserById(id));
}
