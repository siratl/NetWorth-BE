exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").truncate();
  // Inserts seed entries
  return knex("users").insert([
    {
      first_name: "Sam",
      last_name: "Smith",
      email: "elismith@gmail.com",
      username: "elismith",
      age: 25,
      net_worth: 40000,
      category: "UAW: Under Acumulator of Wealth",
    },
    {
      first_name: "Beyonce",
      last_name: "Knowles",
      email: "beyonceknowles@gmail.com",
      username: "missbee",
      age: 39,
      net_worth: 140000000,
      category: "PAW: Prodigous Acumulator of Wealth",
    },
  ]);
};
