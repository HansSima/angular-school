import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private afd: AngularFirestore) {}

  getLessons(collectionId: string) {
    return this.afd.collection<[]>(collectionId).valueChanges();
  }

  setLessons() {
    //return this.afd.collection<[]>('html').add()
  }

  getAll(collectionId: string) {
    return this.afd.collection<[]>(collectionId).snapshotChanges();
  }
}
