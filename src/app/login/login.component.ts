import { Component, OnInit, HostBinding } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(auth => { 
    if(auth) {
      this.router.navigateByUrl('/game-lobby');
    }
  });
}

loginGoogle() {
  this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
    (success) => {
    this.router.navigate(['/game-lobby']);
  }).catch(
    (err) => {
    this.error = err;
  });
}

logout() {
  this.af.auth.signOut();
}

ngOnInit() {
}

}
