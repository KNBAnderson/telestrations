import { Player } from "./Player";


export class Game {
    public turn: number = 0;
    public isGameFinished: boolean = false;
    public newPlayer: Player = new Player("","",0);

    constructor(public rounds: number, 
                public players: Player[]) {}

    assignPlayerRounds() {
        this.rounds = this.players.length;
    }

    endRound() {
        this.players.forEach(player => {
            if (player.chain.length < player.currentGame.turn - 1) {
                return false;
            }
            else {
                this.turn++;
            }
        })
        if (this.turn === (this.rounds - 1)) {
            this.isGameFinished = true;
            //Maybe call and endGame function at this point
        }
    }

    startPlayers() {
        this.players.forEach(player => {
            player.createChainAndSheets();
        });
    }
}
