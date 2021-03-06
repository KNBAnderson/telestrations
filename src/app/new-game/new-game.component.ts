import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/Game';
import { GameService } from './../game.service';
import { PlayerService } from './../player.service';
import { Player } from '../../../models/Player';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { logging } from 'protractor';

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
    this.GameService.addGame(this.newGame);

  }

  async startAddingPlayer(playerEmail: string) {
    let lookItWorks;
     let thisCurrentGame = this.db.list('games').subscribe(games =>{
       games.forEach((game)=>{
         lookItWorks = game.$key
       })
     })
     this.db.list('players').subscribe(players => {
      players.forEach(player => {
        if(player.email === playerEmail) {
          this.playerToAdd = new Player(player.name, playerEmail);
          this.playerToAdd.id = player.$key;
  
          this.db.object('/players/'+player.$key)
            .update({currentGame: lookItWorks}) 
            //this needs to literally add a string to the end of the property in firebase to work
          this.db.object('/games/'+lookItWorks) 
            .update({currentGame: this.playerToAdd.id,
                    rounds: this.newGame.rounds++})

          //  var addPlayer = firebase.database().ref('/games/currentGame');
          //  addPlayer.transaction((updateValue)=>{
          //    return this.db.object('/games/'+lookItWorks) 
          //    .update({currentGame: this.playerToAdd.id,
          //            rounds: this.newGame.rounds++})
    
          //  })         
        }
      })
     })
  }
  
  addPlayerToGame(){
    
  }




}
