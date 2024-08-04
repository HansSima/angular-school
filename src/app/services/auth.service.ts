import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthData } from './../model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  signUp(authData: AuthData) {

    this.afAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        console.log('Sign up succesfull');
      })
      .catch((error) => {
        console.log('Sign up error: ' + error);
      });

  }

  login(authData: AuthData) {

    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        console.log('Login succesfull');
      })
      .catch((error) => {
        console.log('Login up error: ' + error);
      });

  }
}
