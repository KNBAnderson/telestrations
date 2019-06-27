import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { masterFirebaseConfig } from '../environments/api-keys';


import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { SheetComponent } from './sheet/sheet.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { RulesComponent } from './rules/rules.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthGuard } from './auth.service';
import { routing } from './app.routing';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileComponent } from './profile/profile.component';
import { CurrentGameComponent } from './current-game/current-game.component';
import { PreviousComponent } from './previous/previous.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewGameComponent } from './new-game/new-game.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    SheetComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent,
    NavbarComponent,
    RulesComponent,
    WelcomeComponent,
    PlayerListComponent,
    ProfileComponent,
    CurrentGameComponent,
    PreviousComponent,
    NewGameComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
