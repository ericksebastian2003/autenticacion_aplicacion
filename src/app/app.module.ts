import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {provideAuth,getAuth} from '@angular/fire/auth'
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Asegúrate de tener esta línea
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp({"projectId":"b-470cb","appId":"1:901764449978:web:e69f6f8a6f900815cfe483","storageBucket":"b-470cb.firebasestorage.app","apiKey":"AIzaSyAbMFYNMV63u8MY_EB9cWnjeN495wAkOz8","authDomain":"b-470cb.firebaseapp.com","messagingSenderId":"901764449978","measurementId":"G-JTVSPGD292"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}




