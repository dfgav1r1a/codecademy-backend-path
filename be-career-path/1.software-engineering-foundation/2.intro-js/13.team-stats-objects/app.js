const team = {
    _players: [
        {firstName: 'Daniel', lastName: 'Treston', age: 20},
        {firstName: 'Sarah', lastName: 'Chila', age: 19},
        {firstName: 'Angie', lastName: 'White', age: 21},
    ],
    _games: [
        {opponent: 'Eagles', teamPoints: 45, opponentPoints: 20},
        {opponent: 'Blacks', teamPoints: 21, opponentPoints: 19},
        {opponent: 'Yellows', teamPoints: 30, opponentPoints: 21},
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirtsName, newLastName, newAge) {
        const player = {
            firstName: newFirtsName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }
};

team.addPlayer('Bugs', 'Bunny', 76)
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);