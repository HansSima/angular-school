import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { RootCollectionsDocument } from '../model/ui.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  lessonRef: AngularFirestoreCollection<any>;

  constructor(private afd: AngularFirestore) {
    this.lessonRef = this.afd.collection('home');
  }

  setActiveCollection(activeCollectionId: string) {
    this.lessonRef = this.afd.collection(activeCollectionId);
  }

  getRootCollections(): Observable<string[]> {
    return this.afd
      .collection('allCollectionsList')
      .doc<RootCollectionsDocument>('allCollections')
      .valueChanges()
      .pipe(map((doc) => (doc ? doc['rootColList'] : [])));
  }

  addNewLesson(lessonValues: any) {
    this.lessonRef
      .add(lessonValues)
      .then(() => {
        console.log('Dokument úspěšně přidán!');
      })
      .catch((error) => {
        console.error('Chyba při přidávání dokumentu: ', error);
      });
  }

  getLessons() {
    return this.lessonRef.valueChanges();
  }

  createNewDocument(data: any, newDocumentId: string): any {
    const documentRef = this.lessonRef.doc(newDocumentId);
    return documentRef.set(data);
  }

  delete(id: string): Promise<void> {
    return this.lessonRef.doc(id).delete();
  }

  update(data: any, id: string): Promise<void> {
    return this.lessonRef.doc(id).update(data);
  }

  getAll(collectionId: string) {
    return this.lessonRef.snapshotChanges();
  }

  createNewCollection(collectionName: string) {
    this.afd.collection(collectionName);
    console.log(`Collection '${collectionName}' created successfully.`);
  }
}
