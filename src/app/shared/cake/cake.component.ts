import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICake } from '../../core/api/cakes/models/cake.model';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent {
  @Input() cake: ICake;
  @Output() edit: EventEmitter<ICake> = new EventEmitter<ICake>();
  @Output() remove: EventEmitter<ICake> = new EventEmitter<ICake>();

  onEdit(cake: ICake) {
    this.edit.emit(cake);
  }

  onRemove(cake: ICake) {
    this.remove.emit(cake);
  }
}
