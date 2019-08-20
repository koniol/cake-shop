import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ICake } from './models/cake.model';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private db: AngularFirestore) {
  }

  getCakes(): AngularFirestoreCollection<ICake> {
    return this.db.collection('cakes');
  }

  addCake(cake: ICake) {
    const cakesCollection = this.db.collection<ICake>('cakes');
    cakesCollection.add(cake);
  }
}
