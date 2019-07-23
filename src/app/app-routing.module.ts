import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  {
  path: '',
  component: CustomerListComponent
  }, {
    path: 'form',
    component: CustomerFormComponent
  }, {
    path: 'form/:id/:type',
    component: CustomerFormComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
