import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { ICake } from './models/cake.model';
import { Observable, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const COLLECTION_NAME = 'cakes';
const IMAGE_REPOSITORY = 'gs://cake-shop-45c31.appspot.com/cakes/';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private db: AngularFirestore,
              private afStorage: AngularFireStorage,
              private http: HttpClient
  ) {
  }

  getCakes(): Observable<Array<ICake>> {
    return this.db.collection<ICake>(COLLECTION_NAME).valueChanges();
  }

  getImage(id: string): Observable<Blob> {
    return this.http.get(`${IMAGE_REPOSITORY}${id}`).pipe(
      catchError(err => of(err))
    );
  }

  addCake(cake: ICake): Promise<DocumentReference> {
    const cakesCollection = this.db.collection<ICake>(COLLECTION_NAME);
    this.afStorage.upload(`/cakes/${cake.id}`, cake.image);
    const newData = cake;
    newData.image = null;
    return cakesCollection.add(cake);
  }

  removeCake(cake: ICake): Promise<void> {
    return this.db.collection(COLLECTION_NAME).doc(cake.id.toString()).delete();
  }
}
