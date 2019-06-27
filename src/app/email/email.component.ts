import { Component, OnInit, HostBinding, EventEmitter, Output } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { PlayerService } from '../player.service';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  @Output() sendKey = new EventEmitter();

  state: string = '';
  error: any;
  player;
  keyRightNow;
  email: string = '';


  constructor(public af: AngularFireAuth, private router: Router, private database: AngularFireDatabase) {
  this.af.authState.subscribe(auth => { 
    if(auth) {
      this.router.navigateByUrl('/game-lobby');
    }
  });
}



onSubmit(formData) {
  var email = formData.value.email;   
  this.database.list('players').subscribe(players => {
    players.forEach(player => {
      if(player.email === email) {
        this.player = player;
      }
    })
    this.sendKey.emit(this.player.$key);
    this.keyRightNow = this.player.$key;
    console.log(this.keyRightNow);
  })
  if(formData.valid) {
    this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
      (success) => {
        console.log(this.keyRightNow);
        this.router.navigate(['game-lobby']);
    }).catch(
      (err) => {
      console.log(err);
      this.error = err;
    })
  }
  console.log(this.keyRightNow);
}

  ngOnInit() {
  }

}