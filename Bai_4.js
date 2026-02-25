const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];

const getReversedNames = (players) => {
  return players.map((player) => player.split(" - ")[0]).reverse();
};

let result = getReversedNames(players);
console.log(result);
