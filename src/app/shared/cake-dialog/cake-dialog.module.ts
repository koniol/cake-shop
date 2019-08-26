import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeDialogComponent } from './cake-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { ButtonComponent } from '../button/button.component';
import { ButtonModule } from '../button/button.module';
import { TextareaLetterCounterDirective } from '../directives/textarea-letter-counter.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ButtonModule,
  ],
  exports: [],
  entryComponents: [CakeDialogComponent, ButtonComponent],
  declarations: [CakeDialogComponent, TextareaLetterCounterDirective],
  providers: [],
})
export class CakeModule {
}
