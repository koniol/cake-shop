import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CakesService } from './core/api/cakes/cakes.service';
import { ICake } from './core/api/cakes/models/cake.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cakes: Observable<Array<ICake>>;

  constructor(
    private cakesService: CakesService
  ) {
  }

  ngOnInit(): void {
    this.observeCakes();
  }

  observeCakes() {
    this.cakes = this.cakesService.getCakes().valueChanges();
  }
}
