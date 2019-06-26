import { Injectable } from "@angular/core";
import { Game } from '../../models/Game';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../../models/Player';



@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;
  gameKey;
  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
  }

  addGame(newGame: Game) {
    this.games.push(newGame);
  }

  getGames(){
    return this.games;
  }

  getGameById(gameId: string){
    this.gameKey = gameId;    
    return this.database.object('gameslist/' + gameId)
  }



}
