import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form.component';
import { PoModule } from '@portinari/portinari-ui';



@NgModule({
  declarations: [CustomerFormComponent],
  imports: [
    CommonModule,
    PoModule
  ],
  exports: [
    CustomerFormComponent
  ]
})
export class CustomerFormModule { }
