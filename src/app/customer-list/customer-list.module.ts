import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { PoModule } from '@portinari/portinari-ui';



@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    PoModule
  ],
  exports: [
    CustomerListComponent
  ]
})
export class CustomerListModule { }
