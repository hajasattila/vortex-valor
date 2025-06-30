import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RulesComponent } from './pages/rules/rules.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CraftComponent } from './pages/craft/craft.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LobbyComponent } from './pages/lobby/lobby.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { GameComponent } from './pages/game/game.component';
import {SettingsComponent} from "./pages/settings/settings.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'craft', component: CraftComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
