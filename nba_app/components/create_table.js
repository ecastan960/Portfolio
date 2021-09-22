// This function organize the players informacion
// using the Height of the players a keys and all
// the players that had the same height as values
// Inputs: info: Values of the response from the api
// Outputs: table: Sorted array with height as keys and
//                 fitting players as values.
function Height(info) {
  let table = [];
  let index;
  let player;
  for (let i = 0; i < info.length; i++) {
    let found = false;
    index = info[i].h_in;
    player = info[i];
    if (table.length === 0) {
      table.push({ height: index, players: [info[i]] });
    } else {
      for (let i = 0; i < table.length; i++) {
        if (table[i].height === index) {
          table[i].players.push(player);
          found = true;
        }
      }
      if (!found) {
        table.push({ height: index, players: [info[i]] });
        found = false;
      }
    }
  }
  table.sort(function (a, b) {
    return a.height - b.height;
  });
  return table;
}

module.exports = Height;
