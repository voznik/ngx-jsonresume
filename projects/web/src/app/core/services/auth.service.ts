import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  public token: string;

  constructor(private router: Router, private auth: AngularFireAuth) {}

  onSuccess(): void {
    sessionStorage.setItem('session-alive', 'true');
    this.token = 'some-temporary-token';
    this.router.navigate(['/']);
    console.log('AUTH: ', this.auth);
  }

  logout(): void {
    sessionStorage.removeItem('session-alive');
    this.token = null;
    this.router.navigate(['/']);
  }

  getIdToken(): string {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }

  isAuthenticated(): string {
    return sessionStorage.getItem('session-alive');
  }
}
