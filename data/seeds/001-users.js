exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Nate", password: "pass" },
        { username: "Steph", password: "Curry" }
      ]);
    });
};
