exports.seed = async function (knex) {
  // Inserts seed entries
  return knex("users").insert([
    {
      first_name: "Sam",
      last_name: "Smith",
      email: "elismith@gmail.com",
      username: "elismith",
      password: "password",
      age: 25,
      net_worth: 40000,
      category: "UAW: Under Acumulator of Wealth",
    },
    {
      first_name: "Beyonce",
      last_name: "Knowles",
      email: "beyonceknowles@gmail.com",
      username: "missbee",
      password: "password",
      age: 39,
      net_worth: 140000000,
      category: "PAW: Prodigous Acumulator of Wealth",
    },
  ]);
};
