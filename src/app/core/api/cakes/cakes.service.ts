import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICake } from './models/cake.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private db: AngularFirestore) {
  }

  getCakes(): Observable<Array<ICake>> {
    return this.db.collection<ICake>('cakes').valueChanges();
  }

  addCake(cake: ICake) {
    const cakesCollection = this.db.collection<ICake>('cakes');
    cakesCollection.add(cake);
  }
}
