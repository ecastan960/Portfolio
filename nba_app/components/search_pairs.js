// This function prints on console the pairs of players whose high
// add up to the number the user enter. If there is no match,
// the app prints on console "No matches found".
// Inputs: number: The user input number
//          table: The sorted table.
// Outputs: result: array with the pairs that match. This output
//                  is created to test the function
function pairs(number, table) {
  let i = 0;
  let comparison = number - table[i].height;
  let playersLeft;
  let playersRight;
  let result = [];
  if (
    comparison < table[0].height ||
    comparison > table[table.length - 1].height
  ) {
    console.log("No matches found");
    return;
  }
  while (comparison - i >= table[i].height) {
    playersRight = table.find((players) => {
      return players.height == comparison - i;
    });
    playersLeft = table[i];
    if (comparison - i == table[i].height && table[i].players.length > 1) {
      for (let j = 0; j < table[i].players.length; j++) {
        for (let k = j + 1; k < table[i].players.length; k++) {
          let strLeft = `${playersLeft.players[j].first_name} ${playersLeft.players[j].last_name}`;
          let strRight = `${playersRight.players[k].first_name} ${playersRight.players[k].last_name}`;
          let str = `${strLeft} - ${strRight}`;
          result.push(str);
          console.log(str);
        }
      }
    } else {
      for (let n = 0; n < playersLeft.players.length; n++) {
        for (let k = 0; k < playersRight.players.length; k++) {
          let strLeft = `${playersLeft.players[n].first_name} ${playersLeft.players[n].last_name}`;
          let strRight = `${playersRight.players[k].first_name} ${playersRight.players[k].last_name}`;
          let str = `${strLeft} - ${strRight}`;
          result.push(str);
          console.log(str);
        }
      }
    }
    i++;
  }
  return result;
}

module.exports = pairs;
