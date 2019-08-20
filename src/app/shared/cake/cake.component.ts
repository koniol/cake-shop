import { Component, Input, OnInit } from '@angular/core';
import { ICake } from '../../core/api/cakes/models/cake.model';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
  @Input() cake: ICake;
  constructor() { }

  ngOnInit() {
  }

}
