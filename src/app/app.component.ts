import { Component, OnInit } from '@angular/core';
import { CakesService } from './core/api/cakes/cakes.service';
import { ICake } from './core/api/cakes/models/cake.model';
import { catchError, delay, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material';
import { CakeDialogComponent } from './shared/cake-dialog/cake-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cakes: Array<ICake> = [];
  isLoading = false;

  constructor(
    private cakesService: CakesService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.observeCakes();
  }

  observeCakes() {
    this.isLoading = true;
    this.cakesService.getCakes()
      .pipe(
        delay(3000),
        tap(() => this.isLoading = false),
        catchError(() => {
          this.isLoading = false;
          return of([]);
        }))
      .subscribe(cakes => this.cakes = cakes);
  }

  editCake($event: ICake) {

  }

  removeCake($event: ICake) {

  }

  addCake() {
    this.dialog.open(CakeDialogComponent,
      {
        panelClass: 'custom-dialog',
        height: '664px',
        width: '631px',
      });
  }
}
