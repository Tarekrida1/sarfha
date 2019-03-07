import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { MessagesComponent } from './componentes/messages/messages.component';
import { MyAdsComponent } from './componentes/my-ads/my-ads.component';
import {FormsModule} from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MessagesComponent,
    MyAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAFTltE5oB5vFh9D7bSEad-WDSU3SkLQUE',
      authDomain: 'sarfha2.firebaseapp.com',
      databaseURL: 'https://sarfha2.firebaseio.com',
      projectId: 'sarfha2',
      storageBucket: 'sarfha2.appspot.com',
      messagingSenderId: '1023080332196'
    }),
    AngularFirestoreModule,
    FormsModule,

    AngularFireStorageModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
