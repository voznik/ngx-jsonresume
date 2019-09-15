import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { NotificationService } from 'shared-ui';

const collection = (name: string) => firebase.firestore().collection(name);

@Injectable()
export class UserService {
  constructor(private notificationsService: NotificationService) {}

  public saveUserInfo(uid: string, name: string, email: string): Promise<void> {
    return collection('users')
      .doc(uid)
      .set({
        name,
        email,
      });
  }

  public updateUserInfo(
    uid: string,
    displayName: string,
    bio: string
  ): Promise<void> {
    return collection('users')
      .doc(uid)
      .update({
        displayName,
        bio,
      });
  }

  public keepInTouch(email: string) {
    this.notificationsService.default('Your email is saved');
    return collection('touch').add({
      email,
    });
  }

  public contactFormSend(
    company: string,
    firstname: string,
    lastname: string,
    address: string,
    city: string,
    postal: string,
    message: string
  ) {
    this.notificationsService.success('This contact form is saved');
    return collection('contactform/').add({
      company,
      firstname,
      lastname,
      address,
      city,
      postal,
      message,
    });
  }

  public getUserProfileInformation(): void {
    const user = firebase.auth().currentUser;
    // tslint:disable-next-line:one-variable-per-declaration
    let name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;
    }
  }

  public verificationUserEmail(): Promise<void> {
    return firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(
        () => {
          // Email sent.
        },
        error => {
          // An error happened.
        }
      );
  }

  public sendUserPasswordResetEmail(): Promise<void> {
    return firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(
        () => {
          // Email sent.
        },
        error => {
          // An error happened.
        }
      );
  }
}
