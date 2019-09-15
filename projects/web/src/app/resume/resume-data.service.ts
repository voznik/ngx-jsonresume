import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable()
export class ResumeDataService {
  resumes = null;
  subscription;

  subscribeToResumes() {
    if (!this.resumes) {
      this.subscription = this.db
        .collection('resumes')
        .valueChanges({ idField: 'id' })
        .subscribe(resumes => {
          this.resumes = resumes;
        });
    }
  }

  getResume(id: string) {
    if (this.resumes) {
      const cached = this.resumes.find(v => v.id === id);
      console.log('use cached');
      return of(cached);
    } else {
      console.log('use db');
      return this.db
        .collection('resumes')
        .doc(id)
        .valueChanges();
    }
  }

  dispose() {
    this.subscription.unsubscribe();
    this.resumes = null;
  }

  constructor(private db: AngularFirestore) {}
}
