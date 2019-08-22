import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeComponent } from './cake/cake.component';
import { ButtonComponent } from './button/button.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CakeDialogComponent } from './cake-dialog/cake-dialog.component';
import { MatDialogModule } from '@angular/material';

const components = [
  CakeComponent,
  ButtonComponent,
  SpinnerComponent,
  CakeDialogComponent
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [
    components
  ]
})
export class SharedModule {
}
