import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../../../models/Player';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.css'],
  providers: [PlayerService],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class GameLobbyComponent implements OnInit {

  name: any;
  state: string = '';
  profileToDisplay;
  playerId: string;
  currentRoute: string = this.router.url;

  constructor(public af: AngularFireAuth, private route: ActivatedRoute, private location: Location, private PlayerService: PlayerService, private router: Router) {

    this.af.authState.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  logout() {
     this.af.auth.signOut();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.profileToDisplay = this.PlayerService.getPlayerById(this.playerId);
  }

  goToGamePage() {
    this.router.navigate([this.currentRoute + '/game']);
  };

}