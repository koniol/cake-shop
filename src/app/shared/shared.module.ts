import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeComponent } from './cake/cake.component';

const components = [
  CakeComponent,
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components
  ]
})
export class SharedModule {
}
