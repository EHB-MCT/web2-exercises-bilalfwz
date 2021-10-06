class Team {
    constructor(teamname) {
        this.teamname = teamname;
        this.trainername = 'Ash';
        this.pokemonTeam = [];
    }

    describe() {
        return `${teamname} with trainer ${this.trainername}`;
    }
}

class Team {
    constructor(teamname, trainer, roster)
    this.teamname = 'Example teamname';
    this.trainer = 'Example trainername';
    this.roster = [];


    describe() {
        return `${this.teamname} with trainer ${this.trainername}
         has these pokemons: ${[...this.pokemonTeam]} `;
    }
}

export default Team;