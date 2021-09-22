const Height = require("../components/create_table");

const array = [
  {
    first_name: "Alex",
    h_in: "77",
    h_meters: "1.96",
    last_name: "Acker",
  },
  {
    first_name: "Hassan",
    h_in: "76",
    h_meters: "1.93",
    last_name: "Adams",
  },
  {
    first_name: "Arron",
    h_in: "77",
    h_meters: "1.96",
    last_name: "Afflalo",
  },
  {
    first_name: "Maurice",
    h_in: "77",
    h_meters: "1.96",
    last_name: "Ager",
  },
  {
    first_name: "Alexis",
    h_in: "84",
    h_meters: "2.13",
    last_name: "Ajinca",
  },
  {
    first_name: "LaMarcus",
    h_in: "83",
    h_meters: "2.11",
    last_name: "Aldridge",
  },
  {
    first_name: "Joe",
    h_in: "80",
    h_meters: "2.03",
    last_name: "Alexander",
  },
  {
    first_name: "Malik",
    h_in: "82",
    h_meters: "2.08",
    last_name: "Allen",
  },
  {
    first_name: "Ray",
    h_in: "77",
    h_meters: "1.96",
    last_name: "Allen",
  },
];
test("Checks good table size", () => {
  const table = Height(array);
  expect(table.length).toBe(6);
});

test("Checks table first element to be the shortest", () => {
  const table = Height(array);
  expect(table[0].height).toBe("76");
});
