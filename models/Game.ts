import { Player } from "./Player";


export class Game {
    public turn: number = 0;
    public isGameFinished: boolean = false;
    //public newPlayer: Player = new Player("","",0);
    //public rounds: number;
    public players: Player[] = [];
    public rounds: number;
    constructor() {}

   
    getPlayerList() {

    }

    startGame() {
        //set up player sheets
        this.players.forEach(player => {
            player.createChainAndSheets();
        });
        this.rounds = this.players.length;
        Object.freeze(this.rounds);
        Object.seal(this);
    }   
    
    canEndRound() {
        this.players.forEach(player => {
            if (player.chain.length < player.currentGame.turn - 1) {
                return false;
            }
        })
        this.turn++;
        if (this.turn === (this.rounds - 1)) {
            this.isGameFinished = true;
            //Maybe call and endGame function at this point
        }
    }
}
