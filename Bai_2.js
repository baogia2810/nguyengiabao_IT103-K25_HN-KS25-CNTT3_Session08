const playerNames = [
  "Messi",
  "Ronaldo",
  "Neymar",
  "De Bruyne",
  "Kante",
  "Van Dijk",
  "Alisson",
];

function upperNames(players) {
  return players.map((name) => name.toUpperCase());
}

let upperName = upperNames(playerNames);
console.log(upperName);
