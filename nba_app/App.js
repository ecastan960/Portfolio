// This app ask for an input from the user and prints on the
// terminal the pairs of players whose Height add up to the
// input. The information of the players are obtain from an
// endpoint.
// Inputs: None
// Outputs: None

const [input] = require("./components/read_input");
const data = require("./components/api_data");
const Height = require("./components/create_table");
const pairs = require("./components/search_pairs");
const url = "https://mach-eight.uc.r.appspot.com/";

const app = async () => {
  const [number, valid] = input();
  if (!valid) {
    return;
  }
  const response = await data(url);
  const players = response.data.values;
  const table = Height(players);
  const result = pairs(number, table);
};

app();
