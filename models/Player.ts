import { Game } from "./Game";
import { Sheet } from "./Sheet";

export class Player {
    public currentGame: Game;
    chain: Sheet[];
    sheets: Sheet[];
    constructor(public name: string, 
                public email: string, 
                public playerNumber: number ) {  }

    createChainAndSheets() {
       for (let index = 1; index < this.currentGame.players. length; index++) {
         this.chain.push(new Sheet);
         this.sheets.push(new Sheet);
       }
    }

   passSheet(){
     //this is the current turn
     let pTurn = this.currentGame.turn;
    //this is where we pass everyone the drawn/wrote sheet from the other player
    var nextPlayer: Player = this.currentGame.players[pTurn];
    nextPlayer.chain.push(this.sheets[pTurn])

   }

 
}
