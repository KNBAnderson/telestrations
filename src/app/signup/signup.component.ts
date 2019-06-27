import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Form } from '@angular/forms';
import { Player } from '../../../models/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ PlayerService ],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})


export class SignupComponent implements OnInit {
  state: string = '';
  error: any;
  email: string = '';


  constructor(public af: AngularFireAuth, private router: Router, private playerService: PlayerService) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
        this.router.navigate(['/login'])
        var email = formData.value.email;
        var name = email.substring(0, email.lastIndexOf("@"));
        let newPlayer: Player = new Player(name, email);
        this.playerService.addPlayer(newPlayer);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
      console.log(this.email);
    }
  }

  ngOnInit() {
  }

}
