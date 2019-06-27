import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/Game';
import { GameService } from './../game.service';
import { PlayerService } from './../player.service';
import { Player } from '../../../models/Player';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
  providers: [GameService, PlayerService]
})
export class NewGameComponent implements OnInit {
  newGame: Game;
  playerToAdd;
  existingPlayers: FirebaseListObservable<any[]>;

  constructor(private GameService: GameService, private PlayerService: PlayerService, private db: AngularFireDatabase) {
    this.existingPlayers = this.db.list('players');
    
  }

  ngOnInit() {
    this.newGame = new Game();
 
  }

  
  startAddingPlayer(playerEmail: string) {
    this.playerToAdd = this.PlayerService.getPlayerByEmail(playerEmail);
    if(this.playerToAdd){
      console.log(this.playerToAdd);
      
    }else{}
    // this.playerToAdd.currentGame = this.newGame;
    console.log(this.PlayerService.getPlayerByEmail(playerEmail));
}




}
