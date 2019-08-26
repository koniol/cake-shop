import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeComponent } from './cake/cake.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CakeModule } from './cake-dialog/cake-dialog.module';
import { ButtonModule } from './button/button.module';

const components = [
  CakeComponent,
  SpinnerComponent,
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
  ]
})
export class SharedModule {
}
