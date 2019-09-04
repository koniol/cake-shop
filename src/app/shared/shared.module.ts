import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeComponent } from './cake/cake.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CakeModule } from './cake-dialog/cake-dialog.module';
import { ButtonModule } from './button/button.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const components = [
  CakeComponent,
  SpinnerComponent,
  SnackbarComponent,
  ConfirmDialogComponent
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    CakeModule,
    ButtonModule,
  ],
  exports: [
    components,
    CakeModule,
    ButtonModule,
  ],
  entryComponents: [
    SnackbarComponent,
    ConfirmDialogComponent,
  ]
})
export class SharedModule {
}
