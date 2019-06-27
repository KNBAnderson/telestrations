import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/Game';
import { GameService } from './../game.service';
import { PlayerService } from './../player.service';
import { Player } from '../../../models/Player';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
  providers: [GameService, PlayerService]
})
export class NewGameComponent implements OnInit {
  newGame: Game;
  currentPlayer;
  currentPlayerId: string;
  playerToAdd;
  existingPlayers: FirebaseListObservable<any[]>;

  constructor(private GameService: GameService, private PlayerService: PlayerService, private db: AngularFireDatabase, private route: ActivatedRoute) {
    this.existingPlayers = this.db.list('players');
    
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.currentPlayerId = urlParameters['id'];
    });
    this.currentPlayer = this.PlayerService.getPlayerById(this.currentPlayerId);


    this.newGame = new Game();
    // this.newGame.players.push(this.currentPlayer);
    this.GameService.addGame(this.newGame);

    // addThePlayersToGame(){
    //   this.db.object('/games/' +.).subscribe(games => {
    //     games.forEach(game => {
            
    //       })
    //     })
    // }
   
  }


  // gatherPlayersThenStartGame(newPlayers: []){

  // }

  startAddingPlayer(playerEmail: string) { 
     this.db.list('players').subscribe(players => {
      players.forEach(player => {
        if(player.email === playerEmail) {
          this.playerToAdd = new Player(player.name, playerEmail);
          this.playerToAdd.id = player.$key;
          console.log(this.newGame);
          
          this.db.object('/players/'+player.$key)
            .update({currentGame: this.newGame}) 
            this.newGame.players.push(this.playerToAdd)
        }
      })
     })
     console.log(this.newGame);
     
  }





}
