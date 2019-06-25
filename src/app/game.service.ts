import { Injectable } from "@angular/core";
import { Game } from '../../models/Game';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;
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
    return this.database.object('gameslist/' + gameId)
  }
}
