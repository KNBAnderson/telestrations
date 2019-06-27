import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { GameLobbyComponent } from './game-lobby/game-lobby.component';
import { RulesComponent } from './rules/rules.component';
import { CurrentGameComponent } from './current-game/current-game.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

    },
    {
        path: 'playerlist',
        component: PlayerListComponent
    },
    { 
        path: 'login',
        component: LoginComponent 
    },
    {
         path: 'signup', 
         component: SignupComponent 
    },
    {
         path: 'login-email', 
         component: EmailComponent 
    },
    {
         path: 'game-lobby',
         component: GameLobbyComponent, 
         canActivate: [AuthGuard]
    }, 
    {
        path: 'rules',
        component: RulesComponent
    },
    {
        path: 'players/:$key/game',
        component: CurrentGameComponent
    }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);