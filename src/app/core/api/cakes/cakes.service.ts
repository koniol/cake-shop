import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { ICake } from './models/cake.model';
import { Observable, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../../../shared/snackbar/snackbar.component';

const COLLECTION_NAME = 'cakes';
const IMAGE_REPOSITORY = 'gs://cake-shop-45c31.appspot.com/cakes/';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private db: AngularFirestore,
              private afStorage: AngularFireStorage,
              private http: HttpClient,
              private snackBar: MatSnackBar
  ) {
  }

  getCakes(): Observable<Array<ICake>> {
    const cakeCollection = this.db.collection<ICake>(COLLECTION_NAME);
    return cakeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as ICake;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getImage(id: string): Observable<Blob> {
    return this.http.get(`${IMAGE_REPOSITORY}${id}`).pipe(
      catchError(err => of(err))
    );
  }

  addCake(cake: ICake): Promise<DocumentReference> {
    const cakesCollection = this.db.collection<ICake>(COLLECTION_NAME);
    return cakesCollection.add(cake).then(res => {
      this.openSnackBar('DODANO CIASTO !');
      return res;
    }).catch(err => {
      this.openSnackBar('Upsss... Coś poszlo nie tak');
      return err;
    });
  }

  removeCake(cake: ICake): Promise<void> {
    return this.db.collection(COLLECTION_NAME).doc(cake.id.toString()).delete();
  }

  private openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      data: {message},
      panelClass: 'custom-snackbar'
    });
  }
}
