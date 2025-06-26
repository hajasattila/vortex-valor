import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideAnalytics, getAnalytics} from '@angular/fire/analytics';
import {environment} from '../environments/environment';
import {HomeComponent} from './pages/home/home.component';
import {RulesComponent} from './pages/rules/rules.component';
import {ShopComponent} from './pages/shop/shop.component';
import {CraftComponent} from './pages/craft/craft.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {LobbyComponent} from './pages/lobby/lobby.component';
import {LeaderboardComponent} from './pages/leaderboard/leaderboard.component';
import {GameComponent} from './pages/game/game.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {SettingsComponent} from './pages/settings/settings.component';
import {CollectionComponent} from './pages/collection/collection.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, HomeComponent, RulesComponent, ShopComponent, CraftComponent, ProfileComponent, LobbyComponent, LeaderboardComponent, GameComponent, SettingsComponent, CollectionComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
