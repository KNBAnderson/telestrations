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

  
//   async startAddingPlayer(playerEmail: string) {
//     this.playerToAdd = this.PlayerService.getPlayerByEmail(playerEmail);
//     console.log(this.playerToAdd);

// }

  startAddingPlayer(playerEmail: string) { 
     this.db.list('players').subscribe(players => {
      players.forEach(player => {
        if(player.email === playerEmail) {
          this.playerToAdd = new Player(player.name, playerEmail);
          this.playerToAdd.id = player.$key;
          console.log(this.playerToAdd);
        }
      })
  //     this.sendKey.emit(this.player.$key);
  //     this.keyRightNow = this.player.$key;
  //     console.log(this.keyRightNow);
  //   })
     }
  }





}
