import { Injectable } from "@angular/core";
import { Player } from '../../models/Player';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  playerKey;
  playerToAdd: Player;
  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  getPlayers(){
    return this.players;
  }

  getPlayerById(playerId: string){
    this.playerKey = playerId;
    return this.database.object('playerslist/' + playerId)
  }
}
