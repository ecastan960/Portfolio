// This function checks if the input can be converted to an
// integer. If that is not the case, the valid variable turns
// to false and the program is terminated in App.js
// Inputs: url of endpoint
// Outputs: response: response from endpoint
//             error: error message if function cannot get response
const axios = require("axios");

async function players(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = players;
