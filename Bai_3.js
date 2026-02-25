const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];

const filterPlayersByPosition = (position, players) => {
  return players.filter((player) => {
    let parts = player.split(" - ");
    return parts[1] === position;
  });
};

console.log(filterPlayersByPosition("Forward", players));
console.log(filterPlayersByPosition("Midfielder", players));
