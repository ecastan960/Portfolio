const pairs = require("../components/search_pairs");

const table = [
  {
    height: "69",
    players: [
      {
        first_name: "Nate",
        h_in: "69",
        h_meters: "1.75",
        last_name: "Robinson",
      },
    ],
  },
  {
    height: "70",
    players: [
      {
        first_name: "Brevin",
        h_in: "70",
        h_meters: "1.78",
        last_name: "Knight",
      },
      { first_name: "Mike", h_in: "70", h_meters: "1.78", last_name: "Wilks" },
    ],
  },
  {
    height: "71",
    players: [
      {
        first_name: "Chucky",
        h_in: "71",
        h_meters: "1.8",
        last_name: "Atkins",
      },
      {
        first_name: "Speedy",
        h_in: "71",
        h_meters: "1.8",
        last_name: "Claxton",
      },
    ],
  },
];

test("Checks good table size", () => {
  let result = pairs(140, table);
  expect(result.length).toBe(3);
});

test("Checks good table size", () => {
  result = pairs(139, table);
  expect(result.length).toBe(2);
});
