import { Game } from "./Game";
import { Sheet } from "./Sheet";


export class Player {

    public currentGame: Game;
    chain: Sheet[];
    sheets: Sheet[];


    constructor(public name: string, public email: string, currentGame: Game = null, chain: Sheet[] = [], sheets: Sheet[] = []) {  }



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
  
   findPlayerIndex() {
     for (let i = 0; i < this.currentGame.players.length; i++) {
       if (JSON.stringify(this) === JSON.stringify(this.currentGame.players[i])) {
         return i;
       }
      }
    }

    getSheetsByPlayerIndex(playerIndex: number) {
      JSON.stringify(this.currentGame.players[playerIndex].sheets)
    }

 
}