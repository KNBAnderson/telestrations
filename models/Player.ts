import { Game } from "./Game";
import { Sheet } from "./Sheet";


export class Player {
  currentGame: Game = null;
  chain: Sheet[] = [];
  sheets: Sheet[];
  constructor(public email: string) { 
    
    }

    // joinGame(gamePassword: string) {
    //   this.currentGame = this.currentGame.GameService.getGameById(gamePassword);
    //   this.currentGame.players.push(this);
    // }

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
