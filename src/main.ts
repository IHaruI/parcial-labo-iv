import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ...appConfig.providers,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDA6yaetApT1rlzQWmruvDE1VZNMeM6JzY',
        authDomain: 'parcial-labo-iv-6b91a.firebaseapp.com',
        projectId: 'parcial-labo-iv-6b91a',
        storageBucket: 'parcial-labo-iv-6b91a.appspot.com',
        messagingSenderId: '13114554970',
        appId: '1:13114554970:web:b936cc7b3c4b88dd223663',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), // Mantiene otros proveedores de appConfig si los tienes
  ],
}).catch((err) => console.error(err));
