exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("bills").truncate();
  // Inserts seed entries
  return knex("bills").insert([
    {
      name: "Car",
      user_id: 2,
      amount: 650,
      date: "2020-04-05",
      repeat: true,
      paid: false,
      message: "this is a car message",
    },
    {
      name: "Rent",
      user_id: 2,
      amount: 1650,
      date: "2020-04-13",
      repeat: true,
      paid: false,
      message: "this is a rent message",
    },
    {
      name: "Internet",
      user_id: 2,
      amount: 150,
      date: "2020-04-18",
      repeat: true,
      paid: false,
      message: "this is an internet message",
    },
  ]);
};
